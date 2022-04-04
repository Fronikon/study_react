import './App.scss';
import Header from './../Header/Header';
import Menu from './../Menu/Menu';
import ProfileContainer from './../Profile/ProfileContainer';
import UsersContainer from './../Users/UsersContainer';
import DialogsContainer from './../Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Menu />
          <div className='content'>
            <Routes>
              <Route path="profile/*" element={<ProfileContainer />}></Route>
              <Route path="dialogs/*" element={<DialogsContainer />}></Route>
              <Route path="users/*" element={<UsersContainer />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
