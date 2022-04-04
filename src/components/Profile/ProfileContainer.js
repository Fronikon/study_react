import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import withRouter from './../../withRouter';

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params['*'];
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileComponent)

let ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);

export default ProfileContainer;