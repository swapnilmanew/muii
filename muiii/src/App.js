import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
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
