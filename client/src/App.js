import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main></Main>;
  </Router>
  )
}

export default App;
