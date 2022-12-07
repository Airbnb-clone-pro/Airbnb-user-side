import './App.css';
import Navbar from './components/header/Header';
// import SignUp from './sign-up/sign-up';
import SignUp from './components/sign-up/signup';
import Login from './components/login/login';
// import { Navbar } from 'react-bootstrap';
import { LoginProvider } from './contexts/loginModel';
import { useEffect, useRef, useState } from 'react';
import { SignupProvider } from './contexts/singupModel'
import axiosInstance from './axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from './store/actions/getUser';
import { AuthProvider } from './contexts/auth';
import Home from './pages/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showsignup, setShowsignup] = useState(false)
  const [isAuth, setAuth] = useState(false)

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.user)



  useEffect(() => {
    console.log(showLogin);

    if (token) {
      dispatch(GetUser())
    }
  }, [token]);


  useEffect(() => {

    if (user && token) {
      setAuth(true)
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
    <div className="App">
      <Router>
        <AuthProvider value={{ isAuth, setAuth }}>
          <LoginProvider value={{ showLogin, setShowLogin }}>
            <SignupProvider value={{ showsignup, setShowsignup }}>


              {/* <Navbar /> */}
              <SignUp />
              <Login />
              {/* <Home /> */}
              <Switch>
                <Route path="/" exact component={Home} />

              </Switch>


            </SignupProvider>
          </LoginProvider>
        </AuthProvider>
      </Router>



    </div >
  );
}

export default App;
