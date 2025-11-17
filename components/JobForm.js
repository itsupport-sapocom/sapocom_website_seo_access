import { degreesOptionList } from "@/configs/config";
import { useState } from "react";
import axios from "axios";
import Loader from "@/layouts/Loader";
import { setLoadingState } from "@/store/reducers/valueReducer";
import { useDispatch } from "react-redux";

export default function JobForm({ jobData }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    relevantExperience: "",
    highestGraduation: "",
    jobApplied: "",
    graduationYear: "",
    resume: null,
  });

  // Generate an array of years from 2000 to the current year + 4
  const currentYear = new Date().getFullYear();
  const graduationYearOptions = Array.from(
    { length: currentYear - 2000 + 5 },
    (_, index) => 2000 + index
  );

  async function formSubmitHandler(e) {
    e.preventDefault();

    if (!form.resume) {
      alert("Please Upload Resume");
      return;
    }

    try {
      dispatch(setLoadingState(true));
      const formData = new FormData(e.target);
      formData.append('jobApplied', jobData._id);

      const response = await axios.post(
        "/api/applicants",
        formData
      );
      setTimeout(() => {
        alert("Form Submitted Successfully!!!");
      }, 10);

      setForm({
        name: "",
        email: "",
        mobileNumber: "",
        relevantExperience: "",
        highestGraduation: "",
        graduationYear: "",
        resume: null,
      });
    } catch (error) {
      alert("Something went wrong. Please Try Again");
    } finally {
      dispatch(setLoadingState(false));
    }
  }
  return (
    <>
      <Loader />
      <div className="w-full p-4 py-8 md:py-10">
        {/* <div className="max-w-1200 mx-auto"> */}
        <div className="max-w-900 mx-auto p-4 shadow-lg rounded-lg">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            Join Our Team – Apply Today!
          </h2>
          <p className="text-center text-gray-500 text-base mb-4">
            Discover Exciting Opportunities to Shape Your Career with Sapocom
          </p>
          <form
            className="max-w-800 mx-auto md:p-4"
            onSubmit={formSubmitHandler}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <label htmlFor="name" className="mb-6 block">
                <span className="block text-sm text-gray-600">
                  Full Name *
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Please enter your name"
                  className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label htmlFor="email" className="mb-6 block">
                <span className="block text-sm text-gray-600">E-Mail *</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Please enter your email"
                  className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <label htmlFor="mobileNumber" className="mb-6 block">
                <span className="block text-sm text-gray-600">
                  Mobile Number *
                </span>
                <input
                  type="number"
                  name="mobileNumber"
                  id="mobileNumber"
                  required
                  placeholder="Please enter your phone number"
                  className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400 "
                  value={form.mobileNumber}
                  onChange={(e) =>
                    setForm({ ...form, mobileNumber: e.target.value })
                  }
                />
              </label>
              <label htmlFor="resume" className="mb-6 block">
                <span className="block text-sm text-gray-600">
                  Attach CV *
                </span>
                <div className="flex items-center">
                  <span className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400">
                    {form.resume ? form.resume.name : "No file selected"}
                  </span>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  name="resume"
                  id="resume"
                  className="hidden"
                  onChange={(e) =>
                    setForm({ ...form, resume: e.target.files[0] })
                  }
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <label htmlFor="graduationYear" className="mb-6 block">
                <span className="block text-sm text-gray-600">
                  Graduation Year *
                </span>
                <select
                  name="graduationYear"
                  id="graduationYear"
                  required
                  className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                  value={form.graduationYear}
                  onChange={(e) =>
                    setForm({ ...form, graduationYear: e.target.value })
                  }
                >
                  <option value="" disabled>
                    --
                  </option>
                  {graduationYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="highestGraduation" className="mb-6 block">
                <span className="block text-sm text-gray-600">
                  Highest Graduation *
                </span>
                <select
                  name="highestGraduation"
                  id="highestGraduation"
                  required
                  className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                  value={form.highestGraduation}
                  onChange={(e) =>
                    setForm({ ...form, highestGraduation: e.target.value })
                  }
                >
                  <option value="" disabled>
                    --
                  </option>
                  {degreesOptionList.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label htmlFor="relevantExperience" className="mb-6 block">
              <span className="block text-sm text-gray-600">
                Relevant Experience *
              </span>
              <input
                type="text"
                name="relevantExperience"
                id="relevantExperience"
                required
                placeholder="Please enter your experience"
                className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                value={form.relevantExperience}
                onChange={(e) =>
                  setForm({ ...form, relevantExperience: e.target.value })
                }
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
        {/* </div> */}
      </div>
    </>
  );
}
