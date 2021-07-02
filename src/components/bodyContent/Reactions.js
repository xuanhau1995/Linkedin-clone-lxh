import React from "react";

function Reactions({ Icon, title }) {
  return (
    <div className="flex items-center hover-bg p-2 rounded-lg space-x-1 text-gray-600">
      {Icon && <Icon className="h-5" />}
      <h1 className="text-sm">{title}</h1>
    </div>
  );
}

export default Reactions;
