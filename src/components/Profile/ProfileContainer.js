import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import withRouter from './../../withRouter';
import { withAuthRedirect } from './../../hoc/withAuthRedirect'; // не удалять
import { compose } from 'redux';

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params['*'];
        if (!userId) userId = 23348; // при клике на profile
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

const mapDispatchToProps = {
    getUserProfile,
    getUserStatus,
    updateUserStatus
}

const ProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)

export default ProfileContainer;