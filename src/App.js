import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import Login from './components/Login.js';
import Recipe from './components/Recipe.js';
import AddNew from './components/AddNew.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'} className="nav-link">Login</Link>
              <Link to={'/Recipe'} className="nav-link">Recipe</Link>
              <Link to={'/AddNew'} className="nav-link">AddNew</Link>
            </li>
          </ul>
        </nav>
        <hr />
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/Recipe' component={Recipe}/>
              <Route path='/AddNew' component={AddNew}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;