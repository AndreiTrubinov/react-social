import React from "react";
import styles from './Dialogs.module.scss';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={styles.dialog}>
        <NavLink to={path} className={navData => navData.isActive ? styles.active : ''}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {

    return <div className={styles.message}>
        {props.text}
    </div>
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {props.dialogs.map(dialog =>
                    <DialogsItem key={dialog.id} id={dialog.id} name={dialog.name} />)}
            </div>
            <div className={styles.messages}>
                {props.messages.map(message =>
                    <Message key={message.id} text={message.message} />)}
            </div>
        </div>
    )
}
export default Dialogs;