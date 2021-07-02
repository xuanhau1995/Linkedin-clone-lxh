import React from "react";
import {
  AnnotationIcon,
  ReplyIcon,
  ShareIcon,
  ThumbUpIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { Icon, Avatar } from "@material-ui/core";
function People({ background, avatar, name, description }) {
  return (
    <>
      <div className="border border-gray-100 rounded-lg static flex flex-col bg-white hover:shadow-lg transition ease-in-out duration-300">
        <div className="flex flex-col items-center relative h-44 cursor-pointer">
          <img src={background} alt="" className="w-full h-14 rounded-t-lg" />
          <div className="top-4 absolute flex flex-col items-center">
            <div className="pb-4">
              <Avatar
                src={avatar}
                style={{ height: 80, width: 80 }}
                className=" border-white border-2"
              >
                i
              </Avatar>
            </div>
            <h1 className="font-semibold hover:underline flex px-2 text-sm line-clamp-1 text-center">{name}</h1>
            <h6 className="text-sm text-gray-600 line-clamp-2 text-center justify-center flex px-2">{description}</h6>
          </div>
        </div>
        <span className="flex items-center m-4">
          <ClockIcon className="h-4 mr-3" />
          <h1 className="text-xs text-gray-500">Recently active on the feed</h1>
        </span>
        <button className="button-outline mx-5 mb-4 h-8">Connect</button>
      </div>
    </>
  );
}

export default People;
