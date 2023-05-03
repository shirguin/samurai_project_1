import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postsElements = props.posts.map((post) => (
    <Post message={post.message} count={post.count} />
  ));
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
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
