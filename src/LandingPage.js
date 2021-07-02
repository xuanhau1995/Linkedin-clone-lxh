import React from "react";
import { useHistory } from "react-router";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function HomePage() {
  const history = useHistory();
  return (
    <div className="min-h-screen bg-white justify-center flex p-0">
      <div className="lg:w-2/3 w-11/12">
        <header className="flex items-center w-full py-4">
          <img
            className="h-12 flex "
            src="https://t3.ftcdn.net/jpg/03/95/39/16/360_F_395391650_6LfU41V5A4WIhdTis899OaF7wXVgThgP.jpg"
          />

          <div className="flex ml-auto space-x-2">
            <button className="button-ghost">Join now</button>
            <button
              onClick={() => history.push("/loginscreen")}
              className="button-outline"
            >
              Sign in
            </button>
          </div>
        </header>
        <div className="flex pt-10 items-center">
          <div className="flex space-y-4 flex-col">
            <h1 className="text-6xl text-blue-600 font-extralight pb-10">
              Welcome to your professional community
            </h1>
            <span className="flex border border-gray-100 p-4 rounded-lg w-96 hover:shadow-lg transition ease-out duration-500">
              <h1 className="flex flex-grow font-medium text-lg">
                Search for a job
              </h1>
              <ChevronRightIcon className="h-6" />
            </span>
            <span className="flex border border-gray-100 p-4 rounded-lg w-96 hover:shadow-lg transition ease-out duration-500">
              <h1 className="flex flex-grow font-medium text-lg">
                Find a person you know
              </h1>
              <ChevronRightIcon className="h-6" />
            </span>
            <span className="flex border border-gray-100 p-4 rounded-lg w-96 hover:shadow-lg transition ease-out duration-500">
              <h1 className="flex flex-grow font-medium text-lg">
                Learn a skill
              </h1>
              <ChevronRightIcon className="h-6" />
            </span>
          </div>
          <img
            src="https://image.freepik.com/free-vector/multiethnic-people-talking-discuss-social-network-two-friend-men-women-speaking-couples-with-speech-bubbles-character-dialogue-concept_90220-228.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
