import React from 'react';

import Layout from "./pages/Layout/Layout";
import Routes from './routes';
import Login from './pages/Login/Login';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={() => <Login></Login>}/>
      <Route component={() => <Layout><Routes /></Layout>}/>
    </Switch>
    </>
  );
}

export default App;
