import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import withRouter from './../../withRouter';

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params['*'];
        if (!userId) userId = 2;
        this.props.getUserProfile(userId)
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
    getUserProfile
})(WithUrlDataContainerComponent);

export default ProfileContainer;