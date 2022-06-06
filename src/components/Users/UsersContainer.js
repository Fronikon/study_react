import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { 
    follow, 
    unFollow, 
    getUsers
} from './../../redux/users-reducer';
import { 
    getDataUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProcess,
    getPortionSize
} from './../../redux/users-selectors';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProcess={this.props.followingInProcess}
                onPageChanged={this.onPageChanged}
                portionSize={this.props.portionSize} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getDataUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
        portionSize: getPortionSize(state),
    }
}

const mapDispatchToProps = {
    unFollow,
    follow,
    getUsers
}

const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersComponent);

export default UsersContainer