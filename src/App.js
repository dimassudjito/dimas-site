import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Portfolio from './components/portfolio';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
