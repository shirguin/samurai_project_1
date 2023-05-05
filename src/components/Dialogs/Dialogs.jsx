import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  const newMessageEl = React.createRef();
  const addMessage = () => {
    const textMessage = newMessageEl.current.value;
    alert(textMessage);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div className="newMessage">
        <textarea className="textareaNewMessage" ref={newMessageEl}></textarea>
        <button className="buttonNewMessage" onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
