import Navbar from "./components/header/Header";
// import SignUp from './sign-up/sign-up';
import SignUp from "./components/sign-up/signup";
import Login from "./components/login/login";
// import { Navbar } from 'react-bootstrap';
import { LoginProvider } from "./contexts/loginModel";
import { useEffect, useRef, useState } from "react";
import { SignupProvider } from "./contexts/singupModel";
import axiosInstance from "./axios config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "./store/actions/getUser";
import { AuthProvider } from "./contexts/auth";
import Home from "./pages/home/home";
import AccountSettings from "./pages/account-settings/account-settings";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import PersonalInfo from "./pages/personal-info/Personal-info";
import Unit from "./pages/unit/unit";
import "./pages/unit/unit.scss";
import { FilterProvider } from "./contexts/filtersModel";
import Filters from "./components/filters/filters";
import Reservation from "./pages/reservation/reservation";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import UserTrips from "./pages/user-trips/user-trips";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showsignup, setShowsignup] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [showFilters, setShowFilters] = useState(false)

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user);

  const lang = localStorage.getItem('lang')
  !lang ? localStorage.setItem('lang', 'en') : console.log(33)

  useEffect(() => {
    console.log(showLogin);

    if (token) {
      dispatch(GetUser());
    }
  }, [token]);

  useEffect(() => {
    if (user && token) {
      setAuth(true);
    }
  });


  return (
    <div>
      <Router>
        <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
        >
          <AuthProvider value={{ isAuth, setAuth }}>
            <LoginProvider value={{ showLogin, setShowLogin }}>
              <SignupProvider value={{ showsignup, setShowsignup }}>
                <FilterProvider value={{ showFilters, setShowFilters }}>
                  <Navbar />
                  <SignUp />
                  <Login />
                  <Filters />

                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/unit-details/:unitId" exact component={Unit} />

                    {isAuth ? (
                      <Route
                        path="/account-settings"
                        exact
                        component={AccountSettings}
                      />
                    ) : <Redirect to='/' />}
                    {isAuth ? (
                      <Route
                        path="/account-settings/personal-info"
                        exact
                        component={PersonalInfo}
                      />
                    ) : <Redirect to='/' />}
                    {isAuth ? (
                      <Route
                        path="/trips"
                        exact
                        component={UserTrips}
                      />
                    ) : <Redirect to='/' />}
                    {isAuth ? (
                      <Route path="/reservation/:unitId" exact component={Reservation} />
                    ) : <Redirect to='/' />}

                  </Switch>
                </FilterProvider>
              </SignupProvider>
            </LoginProvider>
          </AuthProvider>
        </PayPalScriptProvider>
      </Router>
    </div>
  );
}


export default App;
