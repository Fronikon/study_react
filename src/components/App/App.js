import './App.scss';
import HeaderContainer from './../Header/HeaderContainer';
import Menu from './../Menu/Menu';
import ProfileContainer from './../Profile/ProfileContainer';
import UsersContainer from './../Users/UsersContainer';
import DialogsContainer from './../Dialogs/DialogsContainer';
import { Routes, Route } from "react-router-dom";
import Login from './../Login/Login';
import React from 'react';
// import { getAuthUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import withRouter from './../../withRouter';
import { compose } from 'redux';
import { initializeApp } from '../../redux/app-reducer';
import Preloader from '../common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    
    return (
        <div className="app">
          <HeaderContainer />
          <main className="main">
            <Menu />
            <div className="content">
              <Routes>
                <Route path="profile/*" element={<ProfileContainer />}></Route>
                <Route path="dialogs/*" element={<DialogsContainer />}></Route>
                <Route path="users/*" element={<UsersContainer />}></Route>
                <Route path="login/*" element={<Login />}></Route>
              </Routes>
            </div>
          </main>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {initializeApp}),
  withRouter
)(App)
