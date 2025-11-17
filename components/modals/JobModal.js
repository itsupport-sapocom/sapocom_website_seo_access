import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobModalState,
  getModalId,
  getModalType,
  setJobModalState,
  setLoadingState,
} from "@/store/reducers/valueReducer";
import ModalWrapper from "@/layouts/ModalWrapper";
import axios from "axios";
import { useRouter } from "next/router";
import { generateSlug } from "../admin/utils/generateSlug";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

// const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import TextEditor from "../admin/utils/QuillEditor";

export default function JobModal() {
  const router = useRouter();
  const dispatch = useDispatch();
  const jobModalOpen = useSelector(getJobModalState);
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    department: "",
    description: "",
    place: "",
    details: "",
  });
  const id = useSelector(getModalId);
  const type = useSelector(getModalType);

  useEffect(() => {
    const fetchData = async () => {
      let url = `/api/jobs?_id=${id}`;
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
        department: "",
        description: "",
        place: "",
        details: "",
      });
    }
    setIsLoading(false);
  }, [jobModalOpen, id, type]);
  async function createJob(e) {
    e.preventDefault();
    const createUrl = `/api/jobs`;
    try {
      dispatch(setLoadingState(true));
      let slug, isUnique;
      do {
        slug = generateSlug(form["title"]);
        let url = `/api/jobs?slug=${slug}`;
        const response = await axios.get(url);
        isUnique = response.data.length == 0;
      } while (!isUnique);
      form["slug"] = slug;
      form["isClosed"] = false;
      await axios.post(createUrl, form);
      closeModal(true);
      router.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  async function editJob(e) {
    e.preventDefault();
    const editUrl = `/api/jobs?id=${id}`;
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
    if (type == "Edit") editJob(e);
    else createJob(e);
  }
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (value) => {
    setForm({ ...form, details: value });
  };

  function closeModal() {
    setForm({
      title: "",
      department: "",
      description: "",
      place: "",
      details: "",
    });
    dispatch(setJobModalState(false));
  }
  return (
    <>
      {jobModalOpen && !isLoading && (
        <ModalWrapper closeModal={closeModal}>
          <div className="max-w-800 rounded-lg bg-white p-3 md:p-2 relative">
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
            <div className="md:m-4">
              <h1 className="text-secondary font-semibold text-lg review:text-xl md:text-2xl max-md:text-center">
                {type} Job
              </h1>
              <form
                className="max-w-800 mx-auto"
                onSubmit={formSubmitHandler}
              >
                <div className="grid md:grid-cols-2 md:gap-6">
                  <label htmlFor="title" className="mb-2 md:mb-3 block">
                    <span className="block text-sm text-gray-600">
                      Job Title *
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      required
                      placeholder="Title"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                  </label>
                  <label htmlFor="department" className="mb-2 md:mb-3 block">
                    <span className="block text-sm text-gray-600">
                      Department *
                    </span>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      required
                      placeholder="Department"
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      value={form.department}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          department: e.target.value.toUpperCase(),
                        })
                      }
                    />
                  </label>
                </div>

                <label htmlFor="place" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Job Location *
                  </span>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    required
                    placeholder="Location"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.place}
                    onChange={(e) =>
                      setForm({ ...form, place: e.target.value })
                    }
                  />
                </label>

                <label htmlFor="description" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Job Description *
                  </span>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    required
                    placeholder="description"
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    value={form.description}
                    rows={3}
                    style={{ resize: "none" }}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </label>
                <label htmlFor="details" className="mb-2 md:mb-3 block">
                  <span className="block text-sm text-gray-600">
                    Job Details *
                  </span>
                  <TextEditor
                    value={form.details}
                    onChange={handleEditorChange}
                    // modules={quillModules}
                    // formats={quillFormats}
                  />
                </label>
                <div>
                  <button
                    type="submit"
                    className="py-2 px-4 w-full bg-[#641977] text-white rounded-lg hover:opacity-100 hover:bg-[#390D44] transition duration-300 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
