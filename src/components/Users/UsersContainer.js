import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from './../../redux/users-reducer';
import Users from './Users';

class UsersComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        unFollow={this.props.unFollow}
                        follow={this.props.follow}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch( followAC(userId) );
        },
        unFollow: (userId) => {
            dispatch( unFollowAC(userId) );
        },
        setUsers: (users) => {
            dispatch( setUsersAC(users) );
        },
        setTotalUsersCount: (userCount) => {
            dispatch( setTotalUsersCountAC(userCount) );
        },
        setCurrentPage: (currentPage) => {
            dispatch( setCurrentPageAC(currentPage) );
        },
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer