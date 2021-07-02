import React from "react";
import { Icon, Avatar } from "@material-ui/core";
import LearnTopCourse from "./widgets/LearnTopCourse";
import {
  BookmarkIcon,
  PlusIcon,
  TicketIcon,
  InformationCircleIcon,
  TrendingUpIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { userSlice } from "../../features/userSlice";

function Widgets() {
  return (
    <>
      <div className="space-y-4 hidden lg:flex flex-col space-y-4">
        <div className="bg-white border border-gray-200 w-80 rounded-lg ">
          <label className="flex items-center">
            <h1 className="flex flex-grow font-medium p-4">
              Today’s top courses
            </h1>
            <div className="flex justify-center items-center h-10 w-10 rounded-full hover-bg mr-2">
              <InformationCircleIcon className="h-5 text-gray-500" />
            </div>
          </label>
          {/* list */}
          <LearnTopCourse
            id="1."
            title="Speaking Confidently and Effectively"
            description="Pete Mockaitis | How to Be Awesome at Your Job"
          />
          {/* list */}
          <LearnTopCourse
            id="2."
            title="DevOps Foundations"
            description="It's a culture that is overtaking the business world"
          />
          {/* List */}
          <LearnTopCourse
            id="3."
            title="Unconscious Bias"
            description="It's a culture that is overtaking the business world jhdavsjhsgvhachasgcdhjagscdjhgcsahjdgcj"
          />
          <div className=" flex px-4 py-2 justify-center">
            <span className="flex hover:bg-gray-100 p-1 rounded-lg items-center cursor-pointer px-3">
              <p className="font-bold text-gray-500 text-sm">
                Show more on Linkedin Learing
              </p>
              <ArrowRightIcon className="h-4 ml-2 text-gray-500" />
            </span>
          </div>
        </div>
        {/* <div className="sticky top-20"> */}
        <div className="sticky top-20">
          <div className="bg-white border border-gray-200 w-80 rounded-lg ">
            <img
              src="https://sh1ftdigital.com/wp-content/uploads/2020/08/Screen-Shot-2020-08-17-at-4.46.09-PM-1024x867.png"
              className="object-cover h-full w-full rounded-lg cursor-pointer"
            />
          </div>
          <div className=" w-72 rounded-lg sticky top-20 justify-center flex mt-6 flex-col">
            <div className="flex-wrap gap-4 flex justify-center text-center text-xs text-gray-500">
              <p className="link hover:text-blue-600">About</p>
              <p className="link hover:text-blue-600">Help Center</p>
              <p className="link hover:text-blue-600">Accessibility</p>
              <p className="link hover:text-blue-600">Privacy & Terms</p>
              <p className="link hover:text-blue-600">Advertising</p>
              <p className="link hover:text-blue-600">Business Services</p>
              <p className="link hover:text-blue-600">More</p>
            </div>
            <p className="justify-center flex pt-6 text-xs text-gray-700">
              <img
                className="h-4 mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/512px-LinkedIn_Logo_2013.svg.png"
              />
              Clone by La Xuan Hau
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Widgets;
