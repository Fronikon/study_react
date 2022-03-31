import styles from "./Dialogs.module.scss";
import DialogUser from "./DialogUser/DialogUser";
import MessagesUser from "./MessagesUser/MessagesUser";

function Dialogs(props) {
    function onSendMassageClick() {
        props.sendMassage();
    }
    
    function onNewBodyMessageChange(e) {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let dialogsElements = props.messagesPage.dialogs.map( (cur) => {
        return <DialogUser key={cur.id}
                            name={cur.name}
                            avatar={cur.avatar}
                            id={cur.id} />
    })

    let messagesElements = props.messagesPage.messages.map( (cur) => {
        return <MessagesUser message={cur.message} />
    })

    return (
        <div className={styles.dialogs}>
            <div className={styles.names}>
                {dialogsElements}
            </div>
            <div className={styles.messages_field}>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <div className={styles.send_message}>
                    <textarea onChange={onNewBodyMessageChange} value={props.messagesPage.newMessagesBody} cols="50" rows="2"></textarea>
                    <button onClick={onSendMassageClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;