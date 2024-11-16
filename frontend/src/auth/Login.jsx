import { NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { GiBus } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        },
        { Credentials: true }
      );

      localStorage.setItem("token", response.data.token);
      if (response.status === 200) {
        navigate("/home");
      }

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <section className="lg:flex h-screen">
      <div className="lg:w-1/2 mt-5 mb-5 flex justify-center">
        <div className="lg:w-1/2 flex flex-col justify-between">
          <NavLink className="flex w-fit items-center text-slate-400">
            <MdKeyboardArrowLeft className="text-xl" />
            Back
          </NavLink>
          <div>
            <div>
              <h1 className="text-[#e92a29] text-3xl font-bold">Sign In</h1>
              <p className="text-slate-400 text-xs">
                Enter your email and password to signin!
              </p>
              <h2 className="w-full mt-5 text-slate-400 text-center border-b-[1px] leading-[0.1em] mb-5">
                <span className="bg-white px-[10px]">or</span>
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mt-4">
                <label className="text-sm font-semibold" htmlFor="">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  className="border p-2 focus:border-red-500 outline-none border-slate-200 rounded-2xl"
                  type="email"
                  placeholder="mail@simmmple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative flex flex-col gap-2 mt-4">
                <label className="text-sm font-semibold" htmlFor="">
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  className="focus:border-red-500 outline-none border p-2 border-slate-200 rounded-2xl"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Min.8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaRegEye
                    className="absolute text-slate-400 right-3 bottom-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute text-slate-400 right-3 bottom-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center me-4">
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="red-checkbox"
                      className="ms-2 text-xs  text-gray-900 dark:text-gray-300"
                    >
                      Keep me logged in
                    </label>
                  </div>
                  <h1 className="text-[#e92a29] font-semibold text-xs">
                    Forget Password?
                  </h1>
                </div>
                <button
                  type="submit"
                  className="bg-[#e92a29] mt-5 w-full rounded-2xl p-2 text-white hover:bg-red-700 transition-all duration-150"
                >
                  Sign In
                </button>
                <div className="flex text-sm mt-5">
                  <p>Not registered yet?</p>{" "}
                  <span className="text-[#e92a29] font-semibold cursor-pointer">
                    Create an Account
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <p className="text-sm text-slate-400">
              &copy;2023 Spark Drive. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#e92a29] flex justify-center lg:w-1/2 rounded-bl-[10rem]">
        <div className="lg:w-1/2 w-[90%] flex flex-col justify-between">
          <div></div>
          <div>
            <div className="flex items-center gap-5">
              <GiBus className="text-9xl text-white" />
              <h1 className="text-5xl border-[4px] px-10 py-2 rounded-xl border-white text-white ">
                Spark
              </h1>
            </div>
            <div className="text-white border rounded-[20px] flex flex-col items-center lg:w-[90%] mb-5 lg:mt-20 p-5 border-gray-300">
              <p>Learn more about Air Drive on</p>
              <h1 className="text-xl">Spark.pl</h1>
            </div>
          </div>
          <div className="flex justify-center mb-10">
            <ul className="flex gap-5 text-white text-sm">
              <li className="cursor-pointer">License</li>
              <li className="cursor-pointer">Terms of Use</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
