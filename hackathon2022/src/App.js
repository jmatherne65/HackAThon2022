import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'


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
          <button1 className="button1" onClick={EatMeal}>Have A Mindful Meal</button1>
          <button2 className="button2" onClick={Exercise}>Get Some Exercise</button2>
          <button3 className="button3" onClick={Shower}>Tend To Hygiene</button3>
        </buttonrow>
      </header>

      <body>
<div>
  Everybody goes through tough times. Believe me, been there, done that.
</div>

      </body>

    </div>
  );
}


function EatMeal() {
  alert("Eating a proper, healthy meal can often help better your mood. When possible, please try to eat 3 times a day, and include vegetables and protein in these meals.");
}

function Exercise() {
  alert("Getting sunlight and being active can release natural endorphins, helping you feel better. Consistent light workouts, such as jogging or biking, can better your mental health in the long term.");
}

function Shower() {
  alert("Often, poor hygiene can feed into feelings of anxiety and self doubt. While it can be very hard to be motivated to do so, consistently taking showers and taking care of yourself can greatly improve your self image.");
}

export default App;
