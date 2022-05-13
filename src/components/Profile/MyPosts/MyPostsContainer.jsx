import {addPostActionCreater} from "../../../redux/profile-reducer"
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
        addPost: (post) => {
            dispatch( addPostActionCreater(post) );
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;