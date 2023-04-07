import './App.css';
import Kinetics from './Kinetics';
import Home from './Home';


function App() {
  let Component = Home;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/kinetics":
      Component = Kinetics;
      break;
    default:
      Component = Home;
  }

  
  return (
      <Component />
  );
}

export default App;
