import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getDeleteModalState,
  getModalId,
  getModalType,
  setDeleteModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import axios from "axios";
import { useRouter } from "next/router";

export default function DeleteModal() {
  const dispatch = useDispatch();
  const router = useRouter();
  const deleteModalOpen = useSelector(getDeleteModalState);
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);
  async function deleteHandler() {
    const url = `/api/${type}?id=${id}`;
    try {
      setLoadingState(true);
      await axios.delete(url);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }

  function closeModal() {
    dispatch(setDeleteModalState(false));
  }

  return (
    <>
      {deleteModalOpen && (
        <ModalWrapper closeModal={closeModal}>
          <div className="w-full">
            <div className="max-w-[400px] mx-auto rounded-lg bg-white p-2 review:p-4 relative">
              {/* close modal button */}
              <div
                className="absolute right-4 top-4 md:right-6 md:top-6 bg-black p-2 z-50 rounded-sm cursor-pointer opacity-30 hover:opacity-100 transition-[opacity]"
                onClick={closeModal}
              >
                <Image
                  src={require("../../assets/images/icons/cross-menu.svg")}
                  width={15}
                  height={15}
                  alt="hamburger"
                />
              </div>
              {/* Contact Form*/}
              <div className="md:m-4">
                <h1 className="text-secondary font-semibold text-xl review:text-2xl md:text-3xl mb-4 max-md:text-center">
                  Are you sure ?
                </h1>
                <div className="flex gap-2 max-md:justify-center">
                  <button
                    className="outline-none rounded-md py-2 px-3 text-white bg-gradient-to-r border-2 border-primary from-primary to-secondary transition-all hover:from-secondary hover:to-primary"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                  <button
                    className="py-2 px-3 text-sm border-2 border-primary text-primary rounded-md hover:bg-primary/10"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
