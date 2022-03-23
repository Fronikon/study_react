import './css/App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="wrapper_center">
        <Menu />
        <Profile />
      </div>
    </div>
  );
}

export default App;
