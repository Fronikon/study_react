import './App.scss';

import React, { Suspense } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { initializeApp } from '../../redux/app-reducer';
import withRouter from './../../withRouter';
import store from '../../redux/redux-store';

import Login from './../Login/Login';
import Menu from './../Menu/Menu';
import Preloader from '../common/Preloader/Preloader';
import HeaderContainer from './../Header/HeaderContainer';
import ProfileContainer from './../Profile/ProfileContainer';
// import UsersContainer from './../Users/UsersContainer';
// import DialogsContainer from './../Dialogs/DialogsContainer';

const UsersContainer = React.lazy(() => import('./../Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./../Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />
    // }

    return (
      <div className="app">
        <HeaderContainer />
        <main className="main">
          <Menu />
          <div className="content">
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="profile/*" element={<ProfileContainer />}></Route>
                <Route path="dialogs/*" element={<DialogsContainer />}></Route>
                <Route path="users/*" element={<UsersContainer />}></Route>
                <Route path="login/*" element={<Login />}></Route>
              </Routes>
            </Suspense>
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

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)

let MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter basename='process.env.PUBLIC_URL'>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp;
