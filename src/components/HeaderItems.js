import { Icon, Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HeaderItems({ title, Icon, avatar, link, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center text-gray-500 hover:text-gray-900 cursor-pointer"
    >
      {Icon && <Icon className="h-6" />}
      {avatar && (
        <Avatar
          style={{ height: 24, width: 24 }}
          className="flex items-center justify-center"
        >
          {/* <h1 className="text-xs justify-center items-center flex ">
            {user?.email[0]}
          </h1> */}
        </Avatar>
      )}
      <h1 className="text-xs font-light hidden md:flex">{title}</h1>
      {link && (
        <h1 className="text-xs text-yellow-700 font-light text-center hover:underline">
          {link}
        </h1>
      )}
    </div>
  );
}

export default HeaderItems;
