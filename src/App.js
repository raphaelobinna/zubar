import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import "./sass/main.scss";
import { store } from './store';

 const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));
const Signup = lazy(() => import("./screens/signup"));
const Comic = lazy(() => import("./screens/comic"));
const Video = lazy(() => import("./screens/video"));
const Music = lazy(() => import("./screens/music"));



// const Member = lazy(() => import("./screens"));e


function App() {
  return (
    <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
           <Route exact path="/home" component={Home} /> 
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/comic" component={Comic} /> 
          <Route exact path="/video" component={Video} /> 
          <Route exact path="/music" component={Music} /> 



          
        </Switch>
      </Router>
    </Suspense>
    </Provider>


  );
}

export default App;
