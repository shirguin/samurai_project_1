import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>Алексей</div>
        <div className={classes.dialog}>Иван</div>
        <div className={classes.dialog}>Светлана</div>
        <div className={classes.dialog}>Марина</div>
        <div className={classes.dialog}>Петр</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Привет!</div>
        <div className={classes.message}>Как дела</div>
        <div className={classes.message}>Все в порядке</div>
      </div>
    </div>
  );
};

export default Dialogs;
