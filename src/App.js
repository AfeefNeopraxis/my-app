import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/ImageSlider';
import Header from './Components/Header';
import SplashScreen from './Components/SplashScreen';
import SectionOne from './Components/Sections/One';
import ImageSection from './Components/Sections/ImageSection';

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      
      <Header/>
      
      <ImageSlider auto/>

      <SectionOne/>

<ImageSection/>


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
