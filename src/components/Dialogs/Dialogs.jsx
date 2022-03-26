import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

function Dialogs(props) {
    let dialogsElements = props.messagesPage.dialogs.map( (cur) => <DialogItem key={cur.id} name={cur.name} id={cur.id} />)
    let messagesElements = props.messagesPage.messages.map( (cur) => <MessageItem key={cur.id} message={cur.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.names}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;