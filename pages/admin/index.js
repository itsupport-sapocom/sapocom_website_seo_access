import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ForgotPassword from "@/components/admin/ForgotPassword";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [forgotPass, setForgotPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post("/api/admins/auth/login", form);
      router.push("/admin/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  }
  if (forgotPass) return <ForgotPassword changedPassword={()=>setForgotPass(false)} />;
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
              ADMIN LOGIN
            </h2>
            <form className="mt-8 space-y-3" onSubmit={handleLogin}>
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
              <div>
                <label htmlFor="password">
                  <span className="block text-md text-gray-600">Password</span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="border-2 border-gray-300 text-gray-500 w-full rounded-lg focus:border-gray-400 p-2 outline-none bg-transparent placeholder:text-gray-400"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <div>
                <button
                  type="submit"
                  className="py-2 px-4 w-full bg-[#641977] text-white rounded-lg hover:opacity-100 hover:bg-[#390D44] transition duration-300"
                >
                  Log In
                </button>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setForgotPass(true)}
                  className="text-[#641977] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
