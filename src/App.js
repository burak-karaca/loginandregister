import './App.css';
import Root from '../src/components/root';
import Users from '../src/components/users'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
   
    <Router>


    <div className="App">

    <Switch>
    <Route path="/users" component={Users}/>
    <Route path="/" component={Root}></Route>
    
    </Switch>

    </div>



    </Router>

  
    
  );
}

export default App;
