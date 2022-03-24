import './App.scss';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="wrapper_center">
        <Menu />
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
