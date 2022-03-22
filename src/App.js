import './css/App.css';
// import Header from './modules/Header';
// import Main from './modules/Main';
// import Footer from './modules/Footer';

function App() {
  return (
    <div className="app_wrapper">
      <header className="header">
        <img src="https://www.logodesign.net/images/illustration-logo.png"></img>
      </header>
      <div className="wrapper_center">
        <nav className="menu">
          <ul>
            <li className="menu_link">1</li>
            <li className="menu_link">2</li>
            <li className="menu_link">3</li>
          </ul>
        </nav>
        <main className="main">
          <div className="content">
            <p>Предисловие: Наконец появилась возможность добраться до интернета, сейчас мы находимся в Панамском канале и здесь есть wifi. Я на судне уже больше месяца и пока я здесь, я писал все интересное что здесь происходит и вот наконец есть возможность этим поделиться. Фотографий пока не будет, их я выложу или позже, или уже когда вернусь домой. Итак, понеслась:
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
