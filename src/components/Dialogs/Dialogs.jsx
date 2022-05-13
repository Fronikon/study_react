import { Field, Form, Formik } from "formik";
import styles from "./Dialogs.module.scss";
import DialogUser from "./DialogUser/DialogUser";
import MessagesUser from "./MessagesUser/MessagesUser";

function Dialogs(props) {
    let dialogsElements = props.messagesPage.dialogs.map( (cur) => {
        return <DialogUser key={cur.id}
                            name={cur.name}
                            avatar={cur.avatar}
                            id={cur.id} />
    })

    let messagesElements = props.messagesPage.messages.map( (cur) => {
        return <MessagesUser message={cur.message} />
    })

    function sendMessage(values) {
        props.sendMessage(values.message);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.names}>
                {dialogsElements}
            </div>
            <div className={styles.messages_field}>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <Formik
                    initialValues={{
                        message: "",
                    }}
                    onSubmit={sendMessage}
                >
                    {({dirty}) => (
                        <Form>
                            <div className={styles.send_message}>
                                <Field name={'message'} cols="50" rows="2" as='textarea'></Field>
                                <button type="submit" disabled={!dirty}>Send</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Dialogs;