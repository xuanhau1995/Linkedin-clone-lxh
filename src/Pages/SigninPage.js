import React from "react";

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
      <form className="shadow-xl border border-gray-100 sm:w-6/12 md:w-6/12 lg:w-1/4 w-11/12 rounded-lg py-10 px-5 flex flex-col">
        <h1 className="text-3xl font-bold ">Sign in</h1>
        <p className="text-sm text-gray-600 py-1 pb-4">
          Stay updated on your professional world
        </p>
        {/* <h1>{setErrorEmail}</h1> */}
        <div className="w-full flex flex-col space-y-5 pt-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email or Phone"
            className="border rounded-lg h-12 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border rounded-lg h-12 pl-3 focus:outline-none transition ease-in-out duration:500 hover:border-gray-400"
          />
          <span className="link text-blue-700 font-semibold">
            Forget password
          </span>
          <button
            onClick={onClick}
            className="bg-blue-700 h-12 rounded-full text-white cursor-pointer hover:bg-blue-900 transition ease-in-out duration-300"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default SigninPage;
