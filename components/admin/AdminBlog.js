import {
  setBlogModalState,
  setDeleteModalState,
  setModalId,
  setModalType,
} from "@/store/reducers/valueReducer";
import Image from "next/image";
import { useDispatch } from "react-redux";
import edit from "@/assets/images/icons/edit.svg";
import dlt from "@/assets/images/icons/delete.svg";

export default function AdminBlog({ blogData}) {
  const { title, description, imageLink } = blogData;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(setDeleteModalState(true));
    dispatch(setModalType("blogs"));
    dispatch(setModalId(blogData._id));
  };
  const editHandler = () => {
    dispatch(setBlogModalState(true));
    dispatch(setModalType("Edit"));
    dispatch(setModalId(blogData._id));
  };
  return (
    <div className="max-w-1/3 bg-white border border-gray-300 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg rounded-lg">
      {/* <Image
          loader={() => imageLink}
          unoptimized={true}
          fill={true}
          src={imageLink}
          alt={"careers-img-2"}
        /> */}

      <img
        className="mx-auto rounded-t-lg w-full max-h-[300px]"
        src={imageLink}
        alt="blog-image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className=" font-normal text-gray-700 ">{description}</p>
      </div>
      <div className="flex flex-row mb-2 items-center gap-2 justify-center">
        <div
          onClick={editHandler}
          className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10"
        >
          <Image src={edit} className="h-auto w-auto" alt="header_logo" />
        </div>
        <div
          onClick={deleteHandler}
          className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10"
        >
          <Image src={dlt} className="h-auto w-auto" alt="header_logo" />
        </div>
      </div>
    </div>
  );
}
