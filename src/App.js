import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Frontpage from './pages/frontpage/Frontpage'

//Note: this will NOT make anybody's apps vulnerable. This is a development-time only dependency.
// ten problem z  High            Prototype Pollution     bedzie tylko w developmencie, w produkcji zniknie (powinien)


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Frontpage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
