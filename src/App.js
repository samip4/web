import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';


const App =() => {
  return (
    <section className="App">

    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>


</section>
);
}

export default App;