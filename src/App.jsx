import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Navbar from './NavBar';
import "./App.css"

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />

      </Routes>
    </Router>
  );
};

export default App;