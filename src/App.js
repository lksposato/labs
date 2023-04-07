import './App.css';
import Kinetics from './Kinetics';
import Home from './Home';
import Electrochemistry from './Electrochemistry';

function App() {
  let Component = Home;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/kinetics":
      Component = Kinetics;
      break;
    case "/electrochemistry":
      Component = Electrochemistry;
      break;
    default:
      Component = Home;
  }

  
  return (
      <Component />
  );
}

export default App;
