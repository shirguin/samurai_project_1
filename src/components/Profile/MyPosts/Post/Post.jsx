import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg"></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
