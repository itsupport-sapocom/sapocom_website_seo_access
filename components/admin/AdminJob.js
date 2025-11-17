import Link from "next/link";
import Image from "next/image";
import info from "@/assets/images/icons/info.svg";
import edit from "@/assets/images/icons/edit.svg";
import dlt from "@/assets/images/icons/delete.svg";
import { setDeleteModalState, setJobModalState, setModalId, setModalType } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";
export default function AdminJobOpening({ jobData }) {
    const slug = jobData.slug;
    const dispatch = useDispatch();
    const deleteHandler = () => {
      dispatch(setDeleteModalState(true));
      dispatch(setModalType('jobs'));
      dispatch(setModalId(jobData._id));
    }
    const editHandler = () => {
      dispatch(setJobModalState(true));
      dispatch(setModalType('Edit'));
      dispatch(setModalId(jobData._id));
    }
  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-4 px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-4 max-sm:justify-center max-sm:flex-col">
      <div className="flex-col max-sm:text-center">
        <p className="text-green-500 text-xs">
          {jobData.department.toUpperCase()}
        </p>
        <h2 className="text-xl font-semibold">{jobData.title}</h2>
        <p className="text-gray-500 text-xs">{jobData.place}</p>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center">
          <div onClick={editHandler} className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10">
            <Image
              src={edit}
              className="h-auto w-auto"
              alt="header_logo"
            />
          </div>
          <div onClick={deleteHandler} className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10">
            <Image
              src={dlt}
              className="h-auto w-auto"
              alt="header_logo"
            />
          </div>
        <Link passHref href={`/admin/jobs/${slug}`}>
          <div className="py-1 px-2 w-[40px] text-sm cursor-pointer text-primary rounded-full font-semibold hover:bg-primary/10">
            <Image
              src={info}
              className="h-auto w-auto"
              alt="header_logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
