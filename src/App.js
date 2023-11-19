import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import Header from './Components/Header';
import SplashScreen from './Components/SplashScreen';

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      
      <Header/>
      
      <ImageSlider auto/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
