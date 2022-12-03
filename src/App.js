import logo from './logo.svg';
import './App.css';
// import SignUp from './sign-up/sign-up';
import SignUp from './sign-up/signup';
import Login from './login/login';

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      {/* Signup */}
    </div>
  );
}

export default App;
