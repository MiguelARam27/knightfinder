import { React } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LandingScreen from './screens/LandingScreen';
import Login from './components/Login';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <div
          className='landing'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.97)' }}
        >
          <Switch location={location} key={location.pathname}>
            <Route path='/' component={LandingScreen} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/login' component={Login} exact />
          </Switch>
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
