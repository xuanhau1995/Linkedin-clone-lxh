import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./Pages/Signin";
import { useEffect } from "react";
import { auth } from "./firebase";
import Header from "./components/Header";
import SlideBar from "./components/bodyContent/SlideBar";
import Feed from "./components/bodyContent/Feed";
import Widgets from "./components/bodyContent/Widgets";
import LandingPage from "./LandingPage";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {!user ? (
            <>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
            </>
          ) : (
            <>
              <Header user={user} />
              <div className="flex pt-20 justify-center">
                <SlideBar />
                <Feed />
                <Widgets />
              </div>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
