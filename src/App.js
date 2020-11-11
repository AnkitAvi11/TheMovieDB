import React from 'react';

import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Home';


export const api_key = "d99cf91619cb57d8e03e43735adae9bd";

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
