import React from "react";
import { Icon, Avatar } from "@material-ui/core";
import {
  AnnotationIcon,
  ReplyIcon,
  ShareIcon,
  ThumbUpIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import People from "./Posts/People";
function ItemNetwork() {
  return (
    <>
      <div className="border bg-white my-6 rounded-lg">
        <h1 className="text-xl flex justify-center mt-6">
          Xuan Hau, want even more updates?
        </h1>
        <p className="text-sm text-gray-500 flex justify-center text-center p-2">
          Add these people you may know to your network, and you'll see their
          updates in the feed.
        </p>
        <div className="w-full mx-auto flex-1 p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense gap-4">
            <People
              avatar="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              name="Thuy Linh Nguyen"
              description="Finance, Human Resource and Administrator at Lufthansa"
              background="http://joombig.com/v/tem/images/tech_1/image14871.jpg"
            />
            <People
              avatar="https://storage.ws.pho.to/s2/c89a75636028c8c12c32673b92c474162f5bba13_m.jpg"
              name="The Minh Dang"
              description="Accounts Payable Manager at Công ty Cổ Phần Kiên Nam"
              background="https://images.all-free-download.com/images/graphicthumb/blue_abstract_background_310971.jpg"
            />
            <People
              avatar="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80"
              name="Tuong Ton That"
              description="Typical Procrastinator"
              background="https://image.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg"
            />
            <People
              avatar="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg"
              name="Quyen Ngo"
              description="Senior Associate at PwC Vietnam"
              background="https://sackim.com/wp-content/uploads/2020/01/19.jpg"
            />
            <People
              avatar="https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg"
              name="Uyen Nguyen"
              description="Tax Consultant Intern at PwC Vietnam"
              background="https://anhdepfree.com/wp-content/uploads/2019/05/hinh-nen-background-dep-1.jpg"
            />
            <People
              avatar="https://500px.com/static/media/editors8@1x.126c6fb9.png"
              name="Huong Nguyen"
              description="Seller at Duc Tan"
              background="https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg"
            />
          </div>
        </div>
        <div className="border-t w-full mt-6 p-2 hover:bg-blue-50 rounded-b-lg transition ease-in-out">
          <button className="w-full font-semibold text-blue-700">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemNetwork;
