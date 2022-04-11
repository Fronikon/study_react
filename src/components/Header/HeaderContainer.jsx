import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';

class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
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
    getAuthUserData
})(HeaderComponent)

export default HeaderContainer;