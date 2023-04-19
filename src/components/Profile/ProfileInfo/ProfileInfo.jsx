import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={classes.content__big__photo}
          src="https://natalyland.ru/wp-content/uploads/a/0/c/a0c0bb380e6d9105c77a002a5083a197.png"
        ></img>
      </div>
      <div className="descriptionBlock">ava + description</div>
    </div>
  );
};

export default ProfileInfo;
