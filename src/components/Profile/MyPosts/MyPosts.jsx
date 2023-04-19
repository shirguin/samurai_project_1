import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  console.log(classes);
  return (
    <div>
      <h3>My posts</h3>

      <div className={classes.postsBlock}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div>
        <Post message="Hi, how are you?" count="10" />
        <Post message="It's my first post" count="15" />
      </div>
    </div>
  );
};

export default MyPosts;
