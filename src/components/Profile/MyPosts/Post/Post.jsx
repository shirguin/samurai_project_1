import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://webmg.ru/wp-content/uploads/2022/10/i-83-98.jpeg"></img>
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>
  );
};

export default Post;
