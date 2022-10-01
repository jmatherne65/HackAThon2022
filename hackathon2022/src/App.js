import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import _Happy_Idle_Amim from './images/_Happy_Idle_Anim (1).gif'
import Eat_Food from './images/Eat_Food.gif'
import Exercise_Anim from './images/Exercise_Anim.gif'
import True_Happy_Anim from './images/True_Happy_Anim.gif'
import Water_Drink from './images/Water_Drink.gif'

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
        <element justify="center" className='kit'>
          <img src={_Happy_Idle_Amim} alt="loading..." />
        </element>
      </header>

      <body className="App-body">
        <h1>Everybody goes through hard times. We're here to help.</h1>
        <h3> Life can be difficult at times. Just know that you are not alone in this. Approximately 13% of all teenagers suffer from some form of depression, and 32% suffer from anxiety. </h3>
        <h3>If things are bad and do not seem to be getting better, we advise you to please seek the help of friends and family. There are people that care about you. In addition, we have tips listed below to potentially help you start feeling better:</h3>
        <h4 className="bullet-points">
          <li>Start doing light workouts. Going outside, getting your blood pumping, and getting sunlight has proven to help short-term mental health.</li>
          <li>Do your favorite hobbies. If you used to love to read or play board games and have not in a long time, it is worth it to give these hobbies another try. If they gave you enjoyment recently, you could still enjoy them now.</li>
          <li>Try new things. If life feels static, maybe what you need is a change in life. Go somewhere new, pick up a new hobby, try a new restaurant. Maybe a quick change would help to reinvigorate your day.</li>
          <li>Eat well. Having a poor diet can lead to you lacking the necessary vitamins and calories needed for you to feel well. Having a mixed diet including a variety of foods from all food groups can help with your mental chemistry, potentially helping you to feel better.</li>
          <li>Write it out. If things have been weighing on your mind, you may just need to let it out. If you are not comfortable with talking to people around you, simply writing your feelings in a notebook or anonymously online can help you understand exactly how you feel.</li>
          <li>Take care of yourself. While it can be hard to be motivated, tending to your basic hygiene can make you feel better in the long run. Whether that be taking a shower, brushing your teeth, or washing or clothes, small steps can help you feel better the next day.</li>
        </h4>
        <h1>If this is not enough, please seek professional help. Attached below is the National Suicide Hotline, along with a government website offering people just to talk to you.
          https://988lifeline.org/ or call 988.
          https://www.samhsa.gov/find-help/national-helpline or 1-800-662-4357</h1>


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
