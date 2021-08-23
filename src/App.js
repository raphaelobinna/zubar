import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
 const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));
const Signup = lazy(() => import("./screens/signup"));
// const Member = lazy(() => import("./screens"));e


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
           <Route exact path="/home" component={Home} /> 
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/member" component={Member} /> */}

          
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
