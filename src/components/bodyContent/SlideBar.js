import React from "react";
import { Icon, Avatar } from "@material-ui/core";
import { BookmarkIcon, PlusIcon, TicketIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function SlideBar() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="space-y-4 hidden lg:flex flex-col">
        <div className="bg-white rounded-lg border border-gray-200 w-56">
          <div className="flex flex-col items-center relative h-44 border-b border-gray-100 cursor-pointer">
            <img
              src="https://userscontent2.emaze.com/images/f4747aca-f855-46b8-acc9-2fd4b4fa2d20/ad884cd4669d67b79761b9fdd743f3d6.jpg"
              alt=""
              className="w-full h-14 rounded-t-lg"
            />
            <div className="top-4 absolute flex flex-col items-center">
              <div className="pb-4">
                <Avatar
                  src={user.photoUrl}
                  style={{ height: 80, width: 80 }}
                  className=" border-white border-2"
                >
                  {user.email[0]}
                </Avatar>
              </div>
              <h1 className="font-semibold hover:underline">
                {user.displayName}
              </h1>
              <h6 className="text-xs text-gray-500 font-light">{user.email}</h6>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="py-1 border-b border-gray-100">
              <span className="flex px-3 h-8 border-gray-100 items-center hover-bg">
                <h1 className="flex flex-grow text-xs font-light text-gray-500">
                  Who viewed your profile
                </h1>
                <p className="text-xs font-semibold text-blue-500">1.009</p>
              </span>
              <span className="flex px-3 h-8 items-center hover-bg">
                <p className="flex flex-grow font-light text-xs text-gray-500">
                  Who viewed your profile
                </p>
                <p className="text-xs font-semibold text-blue-500">12.009</p>
              </span>
            </div>
            <span className="flex flex-col p-3 border-b border-gray-100 hover-bg">
              <p className="text-xs text-gray-500 font-light">
                Access exclusive tools & insghts
              </p>
              <span className="flex flex-row ">
                <TicketIcon className="h-5 text-yellow-500 mr-1" />
                <p className="font-medium text-xs"> Try Premium for free</p>
              </span>
            </span>
            <span className="flex p-3 border-b border-gray-100 items-center hover-bg">
              <h1 className="flex flex-col flex-grow">
                <p className="text-gray-500 text-xs">Connection</p>
                <p className="font-medium text-xs">Grow your network</p>
              </h1>
              <p className="text-blue-500 font-medium text-xs">1</p>
            </span>
            <span className="flex p-3 items-center hover-bg rounded-b-lg">
              <BookmarkIcon className="h-4 text-gray-500 mr-2" />
              <p className="text-xs font-medium">My Item</p>
            </span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg mt-6 sticky top-20">
          <p className="link px-3 pt-3 text-xs text-blue-500 font-medium">
            Group
          </p>
          <span className="flex items-center">
            <p className="link px-3 py-2 text-xs text-blue-500 font-medium flex flex-grow">
              Events
            </p>
            <p className="hover:bg-gray-100 cursor-pointer h-8 w-8 rounded-full flex justify-center items-center">
              <PlusIcon className="h-5" />
            </p>
          </span>
          <p className="link px-3 pb-3  text-xs text-blue-500 font-medium">
            Followed Hashtags
          </p>
          <p className="border-t text-xs font-semibold border-gray-100 p-4 text-gray-900 flex justify-center hover-bg rounded-b-lg">
            Discover more
          </p>
        </div>
      </div>
    </>
  );
}

export default SlideBar;
