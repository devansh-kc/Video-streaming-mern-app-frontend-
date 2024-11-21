import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { Github } from "lucide-react";

const Login = () => {
  // TODO: i have to check that the user had entered the username or email
  //
  const [userDetails, setUserDetails] = useState({
    userNameOrEmail: "",
    password: "",
  });
  const navigate = useNavigate();

  const formData = new FormData();

  const validateEmailOrUsername = (input) => {
    const ValidateEmail = isEmail(input);
    console.log(ValidateEmail);
    if (ValidateEmail == true) {
      formData.append("email", userDetails.userNameOrEmail);
    } else {
      formData.append("username", userDetails.userNameOrEmail);
    }
  };
  formData.append("password", userDetails.password);

  async function onHandleSubmit() {
    if (!userDetails.userNameOrEmail || !userDetails.password) {
      alert("please provide username or email and password");
      return;
    }
    validateEmailOrUsername(userDetails.userNameOrEmail);
    try {
      const response = await axios.post("/api/v1/users/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log("user logged in ");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const ShowPassword = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  return (
    <>
      
      <div className="min-h-full bg-[#121212]">
        <div className="mx-auto flex w-full items-stretch justify-between gap-10">
          <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
            <div className="w-full">
              <h1 className="mb-2 text-5xl font-extrabold text-white">
                Log in
              </h1>
              <p className="text-xs text-slate-400">
                Before we start, please log into your account
              </p>
            </div>
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">
                  Username or email
                </label>
                <input
                  placeholder="Enter a username or email..."
                  autoComplete="false"
                  value={userDetails.userNameOrEmail}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      userNameOrEmail: e.target.value,
                    });
                  }}
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Password</label>
                <input
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
              </div>
              <div className="inline-flex w-full items-center justify-between">
                <div className="mr-4 flex items-center">
                  <input
                    type="checkbox"
                    id="checkbox-1"
                    className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                    name="checkbox-1"
                    onClick={ShowPassword}
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
                      htmlFor="checkbox-1"
                      className="text-sm font-medium text-white"
                    >
                      Show Password
                    </label>
                  </div>
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-between">
                <div className="mr-4 flex items-center">
                  <input
                    type="checkbox"
                    id="checkbox-1"
                    className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
                    name="checkbox-1"
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
                      htmlFor="checkbox-1"
                      className="text-sm font-medium text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <p className="cursor-pointer text-sm text-white hover:underline">
                  Forgot password?
                </p>
              </div>
              <button
                onClick={onHandleSubmit}
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
              >
                Log in
              </button>
              <div className="mx-auto my-3 flex w-full max-w-md items-center justify-center gap-4 text-white">
                <hr className="w-full border-[0.1px] border-white" />
                <p className="text-sm">OR</p>
                <hr className="w-full border-[0.1px] border-white" />
              </div>
              <button className="inline-flex w-full items-center justify-center gap-3 border-[1px] border-white bg-black p-3 text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                  <path d="M1 1h22v22H1z" fill="none"></path>
                </svg>{" "}
                Login with Google
              </button>
              <button className="inline-flex w-full items-center justify-center gap-3 border-[1px] border-white bg-black p-3 text-center text-white">
                <Github /> Login with GitHub
              </button>
              <p className="my-14 text-sm font-light text-white">
                Don&#x27;t have an account?{" "}
                <span className="cursor-pointer font-bold hover:underline">
                  Create an account
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
    </>
  );
};

export default Login;
