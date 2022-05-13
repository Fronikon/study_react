import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let ConnectedauthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedauthRedirectComponent;
}