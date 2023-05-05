import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const postsElements = props.posts.map((post) => (
    <Post message={post.message} count={post.count} />
  ));

  let newPostElement = React.createRef();

  const addPost = ()=>{
  props.addPost();
  };

const onPostChange = ()=>{
  const newText = newPostElement.current.value;
  props.updateNewPostText(newText);
}

  return (
    <div>
      <h3>My posts</h3>

      <div className={classes.postsBlock}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick = {addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
