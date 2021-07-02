import React, { useRef } from "react";

function RegisterPage({
  onClick,
  email,
  name,
  password,
  setName,
  setEmail,
  setPassword,
  errorName,
  profliePic,
  setProfilePic,
}) {
  return (
    <>
      <h1 className="text-2xl pb-4">Make the most of your professional life</h1>
      <form className="shadow-xl border border-gray-100 sm:w-6/12 md:w-6/12 lg:w-1/4 w-11/12 rounded-lg pt-5 pb-10 px-5 flex flex-col">
        <div className="w-full flex flex-col space-y-4">
          <div className="space-y-2">
            <span className="text-sm text-gray-600 ">Full name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              required
              type="text"
              className="text-sm w-full border rounded-lg h-10 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
            />
            {errorName && (
              <p className="text-xs text-red-500 italic font-light">
                {errorName}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <span className="text-sm text-gray-600 ">Profile pic Url</span>
            <input
              value={profliePic}
              onChange={(e) => setProfilePic(e.target.value)}
              id="email"
              required
              type="text"
              className="text-sm w-full border rounded-lg h-10 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
            />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-gray-600 ">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
              type="text"
              className="text-sm w-full border rounded-lg h-10 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
            />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-gray-600">
              Password (6 or more characters)
            </span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
              type="password"
              className=" text-sm w-full border rounded-lg h-10 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
            />
          </div>
          <p className="text-xs text-center text-gray-500 ">
            By clicking Agree & Join, you agree to the LinkedIn
            <a className="text-blue-700 link">User Agreement</a>,
            <a className="text-blue-700 link">Privacy Policy</a>, and
            <a className="text-blue-700 link"> Cookie Policy.</a>
          </p>
          <button
            onClick={onClick}
            type="submit"
            className="bg-blue-700 h-12 rounded-full text-white cursor-pointer hover:bg-blue-900 transition ease-in-out duration-300"
          >
            Agree & Join
          </button>
          <p className="justify-center flex">Or</p>
          <button className="button-outline h-12">
            <img
              className="h-6 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            />
            Join with Google
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterPage;
