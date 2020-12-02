import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LandingScreen from './screens/LandingScreen';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Route path='/' component={Login} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/about' component={LandingScreen} exact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
