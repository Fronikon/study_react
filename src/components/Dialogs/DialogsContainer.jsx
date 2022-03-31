import {sendMassageActionCreater, updateNewMessageBodyActionCreater} from "../../redux/dialog-reducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMassage: () => {
            dispatch(sendMassageActionCreater());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreater(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;