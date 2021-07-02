import React, { forwardRef } from "react";
import { Icon, Avatar } from "@material-ui/core";
import {
  DotsHorizontalIcon,
  GlobeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import {
  AnnotationIcon,
  ReplyIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import Reactions from "./Reactions";

const PostItems = forwardRef(
  (
    { name, description, message, photoUrl, IconMore, timestamp, image },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="bg-white border border-gray-200 rounded-lg mt-6"
      >
        <div className="flex">
          <div className="flex items-center flex-grow p-4">
            <div name="avatar" className="h-14 w-14 cursor-pointer">
              <img
                src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/200044753_1919024448274510_6406781862993563561_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PLWjc6OZ_JMAX-3xgve&_nc_ht=scontent.fvca1-1.fna&oh=d7f680235d337daa218a2cbcc24eeba7&oe=60DF5595"
                alt=""
                className="rounded-full"
              />
              {/* <span className="h-3 w-3 border border-white bg-green-600 rounded-full inline-flex absolute bottom-0 right-1"></span> */}
            </div>
            <div className="flex flex-col pl-3 cursor-pointer">
              <h1 className="text-sm font-semibold link">{name}</h1>
              <p className="text-xs text-gray-500 font-light">{description}</p>
              {timestamp && (
                <div className="flex items-center space-x-1 text-gray-500">
                  <h1 className="text-xs text-gray-500 font-light">Now</h1>{" "}
                  <span>•</span>
                  <GlobeIcon className="h-4" />
                </div>
              )}
            </div>
          </div>
          <div className="h-9 w-9 flex justify-center items-center rounded-full hover-bg m-1">
            <DotsHorizontalIcon className="h-6 text-gray-500" />
          </div>
        </div>
        <div>
          <p className="px-4 pb-2 text-sm text-gray-700">{message}</p>
          {image && (
            <div className="flex w-full h-96">
              <img
                className="h-full w-full object-cover"
                src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.6435-9/200044753_1919024448274510_6406781862993563561_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PLWjc6OZ_JMAX-3xgve&_nc_ht=scontent.fvca1-1.fna&oh=d7f680235d337daa218a2cbcc24eeba7&oe=60DF5595"
              />
            </div>
          )}
        </div>
        <div className="flex space-x-2 p-2">
          <Reactions Icon={ThumbUpIcon} title="Like" />
          <Reactions Icon={AnnotationIcon} title="Comment" />
          <Reactions Icon={ShareIcon} title="Share" />
          <Reactions Icon={PaperAirplaneIcon} title="Send" />
        </div>
      </div>
    );
  }
);

export default PostItems;
