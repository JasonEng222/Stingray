import logo from './img/logo512.png';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="TopBar">
        <a href="https://stingray.com/"> 
          <img src={logo} className="Stingray-Logo" alt="logo" />
        </a>
        <div class="TopBarText">
          MED Video Platform
        </div>
      </header>
      <div className="VideoSection">
        <div className="VideoTitle">
          Aldo Wifi Setup Video
        </div>
        <div className="VideoCenter">
          <ReactPlayer controls url='https://www.youtube.com/watch?v=fIfJLvHfV6c'/>
        </div>
      </div>
    </div>
  );
}

export default App;
