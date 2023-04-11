import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
      <Post message='Hi, how are you?' count='10'/>
      <Post message="It's my first post" count='15'/>
      </div>
    </div>
  );
};

export default MyPosts;
