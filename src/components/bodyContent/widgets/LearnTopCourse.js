import React from "react";
import {
  BookmarkIcon,
  PlusIcon,
  TicketIcon,
  InformationCircleIcon,
  TrendingUpIcon,
  ExternalLinkIcon,
} from "@heroicons/react/solid";
function LearnTopCourse({ id, title, description }) {
  return (
    <>
      <div className="group">
        <div className="py-2 px-4 flex group-hover:bg-gray-100 cursor-pointer transition ease-in-out duration-300">
          <p className="pr-2">{id}</p>
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-sm font-medium line-clamp-1">{title}</h1>
              <p className="text-xs text-gray-400 line-clamp-1">
                {description}
              </p>
            </div>
            <div>
              <ExternalLinkIcon className="text-gray-500 h-5 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnTopCourse;
