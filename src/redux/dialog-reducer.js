const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogReduce = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body;
            return state;

        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessagesBody,
                id: '7',
            }
            state.messages.push(newMessage);
            state.newMessagesBody = '';
            return state;
        
        default:
            return state 
    }
}

export function sendMassageActionCreater() {
    return {
        type: SEND_MESSAGE
    }
}

export function updateNewMessageBodyActionCreater(body) {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogReduce;