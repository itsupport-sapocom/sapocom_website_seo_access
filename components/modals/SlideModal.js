import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getSlideModalState,
  setLoadingState,
  setSlideModalState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import axios from "axios";
import { useRouter } from "next/router";

export default function SlideModal() {
  const router = useRouter();
  const dispatch = useDispatch();
  const slideModalOpen = useSelector(getSlideModalState);
  const [slideTitle, setSlideTitle] = useState("");
  const [image, setImage] = useState("");
  const [picture, setPicture] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const createUrl = `/api/pictures`;

    try {
      dispatch(setLoadingState(true));
      const form = new FormData(e.target);
      // form.append("imageBlob", "");
      // form.append("imageBlob", image);
      // form.append("picture", picture);
      await axios.post(createUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }

  const handleTitleChange = (e) => {
    setSlideTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    convertToBase64(e.target.files[0]);
    setPicture(e.target.files[0]);
  };

  function closeModal() {
    setSlideTitle("");
    setImage("");
    setPicture("");
    dispatch(setSlideModalState(false));
  }

  function convertToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      setImage(reader.result);
    }
    reader.onerror = error => {
    }
  }

  return (
    <>
      {slideModalOpen && (
        <ModalWrapper closeModal={closeModal}>
          <div className="max-w-1200 rounded-lg bg-white relative">
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
            <div className="m-4">
              <h1 className="text-secondary md:pb-4 font-semibold text-lg review:text-xl md:text-2xl max-review:text-center">
                Create Slide
              </h1>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <label htmlFor="title" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">Title *</span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={slideTitle}
                    onChange={handleTitleChange}
                  />
                </label>
                <label htmlFor="picture" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">Picture *</span>
                  <input
                    type="file"
                    name="picture"
                    id="picture"
                    accept="image/*"
                    required
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    onChange={handleImageChange}
                  />
                </label>
                <button
                  type="submit"
                  className="py-2 px-4 w-full bg-[#641977] text-white rounded-lg hover:opacity-100 hover:bg-[#390D44] transition duration-300 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
