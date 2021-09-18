
import './App.css';
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Add from './pages/RecetteAdd';
import RecetteId from './components/RecetteId';



const App = () => {
 

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/recettes/add" exact component={Add} />
      <Route path="/recette/:id" component={RecetteId}/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
