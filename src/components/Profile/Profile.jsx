import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.content__big__photo}
          src="https://natalyland.ru/wp-content/uploads/a/0/c/a0c0bb380e6d9105c77a002a5083a197.png"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
