import nodemailer from "nodemailer";
import { JobModel } from "@/models/job";

const data = {
  MAIL_EMAIL: "sapocomwebsiteform@gmail.com",
  MAIL_PASSWORD: "misukhzojcklpkop",
  ADMIN_MAIL: "websitequery@sapocomglobal.com",
  RECRUITMENT_EMAIL: "sapocom.recruitment@sapocomglobal.com",
};

export default async function sendMail(reciever) {
  try {
    // Creating Transporter for sending mail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: data.MAIL_EMAIL,
        pass: data.MAIL_PASSWORD,
      },
    });

    //finding job from job model
    const job = await JobModel.findById(reciever.jobApplied);

    // Sending mail to RECRUITMENT_EMAIL
    await transporter.sendMail({
      from: data.MAIL_EMAIL, // sender address
      to: data.RECRUITMENT_EMAIL, // list of receivers
      subject: `Form Submission - ${reciever.name} details are there.`, // Subject line
      html: `
      <html>
      <head>
        <style>
          /* CSS styles */
          .container {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .header {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px 0;
          }
          .content p {
            margin: 10px 0;
          }
          .attachment {
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${reciever.name} Submitted the Form</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${reciever.name}</p>
            <p><strong>Email:</strong> ${reciever.email}</p>
            <p><strong>Number:</strong> ${reciever.mobileNumber}</p>
            <p><strong>Relevant Experience:</strong> ${reciever.relevantExperience}</p>
            <p><strong>Highest Graduation:</strong> ${reciever.highestGraduation}</p>
            <p><strong>Graduation Year:</strong> ${reciever.graduationYear}</p>
            <p><strong>Job Applied:</strong> ${job.title} (${job.department}) - ${job.place}</p>
          </div>
          
        </div>
      </body>
      </html>
    `,
      attachments: [
        {
          filename: reciever.resume, // Name of the file you want to attach
          path: `public/uploads/${reciever.resume}`, // Path to the file on your server
        },
        // Add more attachments if needed
      ],
    });

    // Sending mail to user
    await transporter.sendMail({
      from: data.MAIL_EMAIL, // sender address
      to: reciever.email, // list of receivers
      subject: `Sapocom Form Submitted Successfully!`, // Subject line
      html: `<html>
      <head>
        <style>
          /* CSS styles */
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .header {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px 0;
          }
          .content p {
            margin: 10px 0;
          }
          .footer {
            color: #666;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Sapocom Form Submitted Successfully</h1>
          </div>
          <div class="content">
            <p>Thank you for your Email. We will get back to you as soon as possible. If you have any queries or concerns, please contact us at <a href="mailto:websitequery@sapocomglobal.com">websitequery@sapocomglobal.com</a>.</p>
            <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this mail in error, please notify the originator of the message. This footer also confirms that this email message has been scanned for the presence of computer viruses.</p>
            <p>Any views expressed in this message are those of the individual sender, except where the sender specifies and with authority, states them to be the views of the SAPOCOM Technologies</p>
          </div>
          <div class="footer">
            <p>This is an automated message. Please do not reply.</p>
          </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
  }
}
