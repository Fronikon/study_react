import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newTextPost: state.profilePage.newTextPost,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch( updateNewPostTextActionCreater(text) );
        },
        addPost: () => {
            dispatch( addPostActionCreater() );
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;