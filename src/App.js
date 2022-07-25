import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import "./sass/main.scss";

import { useSelector } from "react-redux";
import { persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";

const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));
const Signup = lazy(() => import("./screens/signup"));
const Comic = lazy(() => import("./screens/comic"));
const Video = lazy(() => import("./screens/video"));
const Music = lazy(() => import("./screens/music"));
const Profile = lazy(() => import("./screens/profile"));
const Settings = lazy(() => import("./screens/settings"));

// const Member = lazy(() => import("./screens"));e


function App() {
  const auth = useSelector(state => state.persistedStore);
  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (auth.isAuthenticated) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  };

  return (
   
       <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <ProtectedRoute exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/comic" component={Comic} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/settings" component={Settings} />
            <ProtectedRoute exact path="/video" component={Video} />
            <ProtectedRoute exact path="/music" component={Music} />
          </Switch>
        </Router>
      </Suspense>
      </PersistGate>

  );
}

export default App;
