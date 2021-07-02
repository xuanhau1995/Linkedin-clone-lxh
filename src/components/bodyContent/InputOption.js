import React from "react";
import { Icon, Avatar } from "@material-ui/core";

function InputOption({ title, Icon, color }) {
  return (
    <div className="flex space-x-2 items-center p-2 rounded-lg cursor-pointer hover-bg">
      {/* <Icon style={{ color: color }} /> */}
      {Icon && <Icon className="h-6" style={{ color: color }} />}
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

export default InputOption;
