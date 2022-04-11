import { connect } from 'react-redux';
import React from 'react';
import { follow, unFollow, getUsers, getUsers2} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers2(currentPage, this.props.pageSize);
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
                onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess,
    }
}

let UsersContainer = connect(mapStateToProps, {
    unFollow,
    follow,
    getUsers,
    getUsers2,
})(UsersComponent);

export default UsersContainer