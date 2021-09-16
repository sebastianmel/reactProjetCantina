
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Add from './pages/RecetteAdd';
// import 

const App = () => {
 

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recettes/add" exact component={Add} />

      
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
