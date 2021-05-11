import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Index from './components/Index';
import Add from './components/Add';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/" component={Add} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
