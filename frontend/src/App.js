import { React } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LandingScreen from './screens/LandingScreen';
import Login from './components/Login';
import HomeScreen from './screens/HomeScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/signup' component={SignUp} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/home' component={HomeScreen} exact />
          <Route path='/' component={LandingScreen} exact />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
