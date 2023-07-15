import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Activity from './components/activity';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar/>
        <Switch>
          <Route path='*' component={() => {
              window.location.href = 'https://github.com/dimassudjito';
              return null;
            }}
          />
          <Route exact path="/"><Home/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
          <Route path="/activity"><Activity/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
