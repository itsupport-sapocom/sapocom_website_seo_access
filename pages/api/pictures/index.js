import formidable from "formidable";
import fs from "fs";
import path from 'path';
import datauri from 'datauri';

import { connectToDatabase } from "@/lib/db";
import { PictureModel } from "@/models/picture";
import { protectRoute } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";


export const config = {
  api: {
    bodyParser: false,
  },
};

// GET /api/pictures
const handler = async function (req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const pictures = await PictureModel.find({
        isDeleted: false,
        ...(req.query && req.query),
      });

      res.status(200).json(pictures);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const form = formidable({
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form data:", err);
          res.status(500).json({ err, error: "Internal Server Error" });
          return;
        }

        const fieldsObject = {};

        for (const key in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, key)) {
            fieldsObject[key] = fields[key][0];
          }
        }
       
        const file = files.picture[0];
        const base64Image = await convertImageToBase64(file.filepath);
        // console.log("BASE IAMGE: ", base64Image);
        
        console.log("cloudinary file upload start" );
        let uploadResponse;
        try {          
          uploadResponse = await cloudinary.v2.uploader.upload(base64Image, {
            upload_preset: 'sapocom',
            timeout: 300000,
          });
          // console.log("cloudinary file upload end" );
          
          const link = uploadResponse.url;
          
          // console.log("connect to db start");
          await connectToDatabase();
          // console.log("connect to db end");
          // console.log("save picture start");
          const newPicture = await PictureModel.create({ ...fieldsObject, link, cloudinaryImageId: uploadResponse.public_id });
          // console.log("save picture end");
        } catch (error) {
          console.log("cloudinary error", error );
        }

        res.status(201).json({ message: "File Uploaded Successfully!", newPicture });
      });

    } catch (error) {
      console.log("ERROR:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const picture = await PictureModel.findById(req.query.id);

      await cloudinary.v2.uploader.destroy(picture.cloudinaryImageId);
      await PictureModel.deleteOne({ _id: req.query.id })

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;


async function convertImageToBase64(img) {
  const base64Image = await datauri(img);
  return base64Image;
}
