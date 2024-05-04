import axios from "axios";
import React, { useState } from "react";
import conf from "../Conf";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const formData = new FormData();
  formData.append("fullName", userDetails.fullName);
  formData.append("username", userDetails.username);
  formData.append("email", userDetails.email);
  formData.append("password", userDetails.password);
  if (avatar) formData.append("avatar", avatar);
  if (coverImage !== null) formData.append("coverImage", coverImage);

  async function onUserSignUp() {
    // const instance = axios.create({
    //   baseURL: "http://localhost:8000/api/v1/users/register",
    // });

    try {
      const response = await axios.post("/api/v1/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("User registered successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  function showPassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  return (
    <div>
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="min-h-screen bg-[#121212]">
        <header className="fixed top-0 z-10 mx-auto w-full max-w-full bg-[#121212] p-6 text-white lg:px-10">
          <h1>DevUI</h1>
        </header>
        <div className="mx-auto flex w-full items-stretch justify-between gap-10">
          <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
            <div className="w-full">
              <h1 className="mb-2 text-5xl font-extrabold text-white">
                Register
              </h1>
              <p className="text-xs text-slate-400">
                Before we start, please create your account
              </p>
            </div>
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Full Name</label>
                <input
                  required
                  placeholder="Enter a first name..."
                  autoComplete="false"
                  value={userDetails.fullName}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, fullName: e.target.value })
                  }
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Username </label>
                <input
                  required
                  placeholder="Enter a username"
                  autoComplete="false"
                  value={userDetails.username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Email</label>
                <input
                  placeholder="Enter an email..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </div>

              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Password</label>
                <input
                  required
                  placeholder="Enter a password..."
                  autoComplete="false"
                  type="password"
                  id="password"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <label className="text-xs text-slate-200">Avatar</label>
                  <input
                    required
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <label className="text-xs text-slate-200">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => setCoverImage(e.target.files[0])}
                    className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="checkbox-2"
                  className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                  name="checkbox-2"
                  onClick={showPassword}
                />
                <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                  <svg
                    className="pointer-events-none hidden h-3 w-3 fill-current text-white"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#000000"
                        fillRule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="checkbox-2"
                    className="text-sm font-medium text-white"
                  >
                    Show password
                  </label>
                </div>
              </div>

              <button
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                onClick={onUserSignUp}
              >
                Create Account
              </button>
              <p className="my-14 text-sm font-light text-white">
                Already registered?{" "}
                <span className="cursor-pointer font-bold hover:underline">
                  Sign in to your account
                </span>
              </p>
            </div>
          </div>
          <div className="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="register_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
