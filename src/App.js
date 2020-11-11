import React from 'react';

import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Home';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
