import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth-reducer';

class HeaderComponent extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

let HeaderContainer = connect(mapStateToProps, {
    logOut
})(HeaderComponent)

export default HeaderContainer;