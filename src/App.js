import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import Login from './components/login.js';
import Recipe from './components/recipe.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'} className="nav-link">Login</Link>
              <Link to={'/Recipe'} className="nav-link">Recipe</Link>
            </li>
          </ul>
        </nav>
        <hr />
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/Recipe' component={Recipe}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;