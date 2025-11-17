import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogModalState,
  getModalId,
  getModalType,
  setBlogModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import axios from "axios";
import { useRouter } from "next/router";

export default function BlogModal() {
  const router = useRouter();
  const dispatch = useDispatch();
  const blogModalOpen = useSelector(getBlogModalState);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageLink: "",
    externalLink: "",
  });
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);

  useEffect(() => {
    const fetchData = async () => {
      let url = `/api/blogs?_id=${id}`;
      try {
        const res = await axios.get(url);
        setForm(res.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // if edit , then first fetch the previous data
    if (type == "Edit") {
      fetchData();
    } else {
      setForm({
        title: "",
        description: "",
        externalLink: "",
        imageLink: "",
      });
    }
    setIsLoading(false);
  }, [blogModalOpen, id, type]);
  async function createBlog(e) {
    e.preventDefault();
    const createUrl = `/api/blogs`;
    try {
      dispatch(setLoadingState(true));
      await axios.post(createUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  async function editBlog(e) {
    e.preventDefault();
    const editUrl = `/api/blogs?id=${id}`;
    try {
      dispatch(setLoadingState(true));
      await axios.put(editUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    if (type == "Edit") editBlog(e);
    else createBlog(e);
  }

  function closeModal() {
    setForm({
      title: "",
      description: "",
      externalLink: "",
      imageLink: "",
    });
    dispatch(setBlogModalState(false));
  }
  return (
    <>
      {blogModalOpen && !isLoading && (
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
                {type} Blog
              </h1>
              <form className="w-[200px] review:w-[400px] mx-auto" onSubmit={formSubmitHandler}>
                <label htmlFor="title" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">Title *</span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.title}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        title: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </label>
                <label htmlFor="imageLink" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Image Link *
                  </span>
                  <input
                    type="text"
                    name="imageLink"
                    id="imageLink"
                    required
                    placeholder="imageLink"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.imageLink}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        imageLink: e.target.value,
                      })
                    }
                  />
                </label>
                <label htmlFor="externalLink" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    External Link *
                  </span>
                  <input
                    type="text"
                    name="externalLink"
                    id="externalLink"
                    required
                    placeholder="externalLink"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.externalLink}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        externalLink: e.target.value,
                      })
                    }
                  />
                </label>

                <label htmlFor="description" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Description *
                  </span>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    required
                    placeholder="Description"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.description}
                    rows={3}
                    style={{ resize: "none" }}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
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
