import './App.scss';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="wrapper_center">
          <Menu />
          <div className='content'>
            <Routes>
              <Route path="profile/*" element={<Profile />}></Route>
              <Route path="dialogs/*" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
