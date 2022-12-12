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

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showsignup, setShowsignup] = useState(false);
  const [isAuth, setAuth] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user);

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

  // const{ isAuth, setAuth } = useContext(authContext);

  // const token = useSelector(state => state.userSignup.token)
  // console.log(token);
  // localStorage.setItem('token', token)
  // let tokenn = localStorage.getItem('token')
  // console.log(tokenn);

  // const config = {
  //   headers: { Authorization: token }
  // }
  // axiosInstance.get('/users/', headers: { Authorization: `Bearer ${token}` }).then((res) => {
  //   console.log(res);
  //   // ev.target.submit()
  //   // alert("Form Sent Successfully")
  // }).catch((err) => {

  // })

  return (
    <div>
      <Router>
        <AuthProvider value={{ isAuth, setAuth }}>
          <LoginProvider value={{ showLogin, setShowLogin }}>
            <SignupProvider value={{ showsignup, setShowsignup }}>
              <Navbar />
              <SignUp />
              <Login />

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

              </Switch>
            </SignupProvider>
          </LoginProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}


export default App;
