import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import _Happy_Idle_Amim from './images/_Happy_Idle_Anim (1).gif'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <header className="App-header">
        <element id='rcorners3'></element>
        <element id='rcorners4'></element>
        <element justify = "center" id = 'kit'>
        <img src={_Happy_Idle_Amim} alt="loading..." />
        </element>
        <buttonrow justify="center">
          <button1 className="button1" onClick={EatMeal}>Have A Mindful Meal</button1>
          <button2 className="button2" onClick={Exercise}>Get Some Exercise</button2>
          <button3 className="button3" onClick={Shower}>Tend To Hygiene</button3>
        </buttonrow>
      </header>

      <body className="App-body">
          <h1>Everybody goes through hard times. We're here to help.</h1>
             <h3> Life can be difficult at times. Just know that you are not alone in this. Approximately 13% of all teenagers suffer from some form of depression, and 32% suffer from anxiety. </h3>


              **We are not mental health professionals, and this advice should not be taken as a final decision. If you are suffering from mental health issues, please seek professional help.
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
