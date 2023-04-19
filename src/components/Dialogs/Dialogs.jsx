import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props)=>{
  return(
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Алексей" id="1" />
        <DialogItem name="Иван" id="2" />
        <DialogItem name="Светлана" id="3" />
        <DialogItem name="Марина" id="4" />
        <DialogItem name="Петр" id="5" />
        <DialogItem name="Сергей" id="6" />
        <DialogItem name="Андрей" id="7" />
      </div>
      <div className={classes.messages}>
        <Message message = 'Привет!'/>
        <Message message = 'Как дела?'/>
        <Message message = 'Все ок'/>
        <Message message = 'Прикольно'/>
        <Message message = 'Как сам?'/>
        <Message message = 'Что на завтра?'/>
      </div>
    </div>
  );
};

export default Dialogs;
