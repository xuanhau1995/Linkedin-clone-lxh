import React from "react";
import InputOption from "./InputOption";
import PostItems from "./PostItems";
import ItemNetwork from "./ItemNetwork";
import {
  AnnotationIcon,
  CalendarIcon,
  DotsCircleHorizontalIcon,
  PencilAltIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const sendPosts = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "La Xuan Hau",
      description: "Fontend Developer",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="w-full lg:w-1/3 px-6">
      <div className="w-full rounded-lg border border-gray-200 bg-white p-3 px-4">
        <div className="border border-gray-100 rounded-full h-16 px-4 flex items-center space-x-2">
          <PencilAltIcon className="h-6 text-gray-500" />
          <form action="" className="flex items-center w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
              className="focus:outline-none w-full h-full font-medium text-sm bg-transparent"
            />
            <button onClick={sendPosts} type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-between pt-2">
          <InputOption title="Photo" Icon={PhotographIcon} color="#70b5f9" />
          <InputOption title="Video" Icon={VideoCameraIcon} color="#e7a33e" />
          <InputOption title="Event" Icon={CalendarIcon} color="#c0cbcd" />
          <InputOption
            title="Write article"
            Icon={AnnotationIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <PostItems
              key={id}
              name={user.displayName}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
      <ItemNetwork />
    </div>
  );
}

export default Feed;
