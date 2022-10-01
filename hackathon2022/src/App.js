import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      </Router>
      <header className="App-header">
        <element id='rcorners3'></element>
        <element id='rcorners4'></element>
        <buttonrow justify="center">
          <button className="button" onClick={EatMeal}>Have A Mindful Meal</button>
          <button className="button" onClick={Exercise}>Get Some Exercise</button>
          <button className="button" onClick={Shower}>Tend To Hygiene</button>
        </buttonrow>
      </header>
    </div>
  );
}

function EatMeal() {
  alert("Button 1 yep");
}

function Exercise() {
  alert("Button 2 yep");
}

function Shower() {
  alert("Button 3 yep");
}

export default App;
