import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="content__big__photo"
          src="https://natalyland.ru/wp-content/uploads/a/0/c/a0c0bb380e6d9105c77a002a5083a197.png"
        ></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
