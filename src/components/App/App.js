import './App.scss';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
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
              <Route path="profile/*" element={<Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch} />}></Route>
              <Route path="dialogs/*" element={<Dialogs messagesPage={props.state.messagesPage}
                                                        dispatch={props.dispatch} />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
