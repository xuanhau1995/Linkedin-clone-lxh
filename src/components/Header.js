import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HeaderItems from "./HeaderItems";
import {
  BeakerIcon,
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HomeIcon,
  UserGroupIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { logout, selectUser, userSlice } from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logouttoApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <>
      <header className="header ">
        <div className="flex lg:w-96 lg:mr-24">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt=""
            className="h-9 pr-2 object-contain"
          />
          <div className="h-9 items-center bg-blue-50 rounded-md focus:outline hidden lg:flex w-full">
            <SearchIcon className="mx-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-blue-50 focus:outline-none text-xs w-full"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex space-x-6">
          <div className="flex space-x-6 items-center">
            <div className="flex lg:hidden pl-6">
              <HeaderItems title="Search" Icon={SearchIcon} />
            </div>
            <div>
              <HeaderItems title="Home" Icon={HomeIcon} />
            </div>
            <div>
              <HeaderItems title="My Network" Icon={UserGroupIcon} />
            </div>
            <div>
              <HeaderItems title="Jobs" Icon={BriefcaseIcon} />
            </div>
            <div className="hidden sm:flex">
              <HeaderItems title="Message" Icon={ChatIcon} />
            </div>
            <div className="hidden sm:flex">
              <HeaderItems title="Notification" Icon={BellIcon} />
            </div>
            <div className="hidden sm:flex">
              <HeaderItems onClick={logouttoApp} title="Me" avatar={true} />
            </div>
            <div className="flex sm:hidden">
              <HeaderItems title="Notification" Icon={DotsHorizontalIcon} />
            </div>
          </div>
          <div className="border-l space-x-6 pl-6 hidden sm:flex">
            <HeaderItems title="Work" Icon={ViewBoardsIcon} />
            <HeaderItems link="Try Premium for free" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
