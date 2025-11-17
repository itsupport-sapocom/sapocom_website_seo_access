import {
  setDeleteModalState,
  setModalId,
  setModalType,
} from "@/store/reducers/valueReducer";
import Image from "next/image";
import { useDispatch } from "react-redux";
import dlt from "@/assets/images/icons/delete.svg";

export default function AdminSliderCard({ sliderData }) {
  const link = sliderData.link;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(setDeleteModalState(true));
    dispatch(setModalType("pictures"));
    dispatch(setModalId(sliderData._id));
  };
  
  return (
    <div className="max-w-1/3 bg-white border border-gray-300 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg rounded-lg">
      <img src={link} alt="bg_image" className="w-full" />
      <div className="w-full flex items-center justify-center">
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
