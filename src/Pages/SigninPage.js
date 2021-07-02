import React from "react";
import { BeakerIcon, MailIcon, LockClosedIcon } from "@heroicons/react/solid";
function SigninPage({
  email,
  setEmail,
  password,
  setPassword,
  onClick,
  setErrorEmail,
}) {
  return (
    <>
      <form className="bg-white w-11/12 sm:w-1/2 md:w-5/12 lg:w-2/6 xl:w-3/12 border border-gray-100  rounded-lg shadow-lg p-6 pb-10">
        <h1 className="text-3xl">Login</h1>
        <p className="text-sm text-gray-500 pt-2">
          Stay updated on your professional world
        </p>
        <div className="input-icon mt-6">
          <MailIcon className="h-6 text-gray-500" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            placeholder="Email"
            className="h-10 w-full focus:outline-none "
          />
        </div>
        <div className="input-icon mt-4">
          <LockClosedIcon className="h-6 text-gray-500" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Password"
            className="h-10 w-full focus:outline-none "
          />
        </div>
        <p className="link pt-4 text-blue-700 font-medium">Forget Password</p>
        <button onClick={onClick} className="button-primary w-full mt-6">
          Sign In
        </button>
      </form>
    </>
  );
}

export default SigninPage;
