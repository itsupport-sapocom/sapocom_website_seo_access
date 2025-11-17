import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ForgotPassword = ({changedPassword}) => {
  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (otpSent) resetPassword(e);
    else sendOtp(e);
  }
  async function sendOtp(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const emailObj = { email: form.email };
      const response = await axios.post(
        "/api/admins/auth/resetPasswordOTP",
        emailObj
      );
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      setOtpSent(true);
    }
  }
  async function resetPassword(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/admins/auth/resetPassword", form);
      // console.log('form ' , form);
      // console.log('res ' , response);
      changedPassword();
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 z-[100] w-screen h-screen bg-black/50 p-4 grid place-items-center">
          <div className="p-4 bg-white w-[110px] h-[110px] rounded-full grid place-items-center">
            <span className="loader"></span>
          </div>
        </div>
      )}
      <div className="w-full py-12 md:py-20">
        <div className="max-w-1200 mx-auto">
          <div className="max-w-[400px] mx-auto flex-col space-y-4 p-4 shadow-lg rounded-lg">
            <h2 className="text-center text-4xl font-bold text-secondary">
              RESET PASSWORD
            </h2>
            <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">
                  <span className="block text-md text-gray-600">Email</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              {otpSent && (
                <div>
                  <label htmlFor="otp">
                    <span className="block text-md text-gray-600">
                      One Time Password (OTP)
                    </span>
                    <input
                      id="otp"
                      name="otp"
                      type="otp"
                      autoComplete="otp"
                      required
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      placeholder="Enter OTP"
                      value={form.otp}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          otp: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
              )}
              {otpSent && (
                <div>
                  <label htmlFor="newPassword">
                    <span className="block text-md text-gray-600">
                      New Password
                    </span>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      required
                      className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                      placeholder="New Password"
                      value={form.newPassword}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          newPassword: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
              )}
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <div>
                <button
                  type="submit"
                  className="py-2 px-4 w-full bg-[#641977] text-white rounded-lg hover:opacity-100 hover:bg-[#390D44] transition duration-300"
                >
                  {otpSent ? "Set Password" : "Send OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
