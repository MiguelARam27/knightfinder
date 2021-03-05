import { React } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LandingScreen from './screens/LandingScreen';
import Login from './components/Login';
import HomeScreen from './screens/HomeScreen';
import { AnimatePresence } from 'framer-motion';
import ProfileEditScreen from './screens/ProfileEditScreen';
import FriendSearchScreen from './screens/FriendSearchScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

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
          <Route path='/profile' component={ProfileEditScreen} exact />
          <Route path='/search/:keyword' component={FriendSearchScreen} />
          <Route path='/search' component={FriendSearchScreen} exact />
          <Route
            path='/forgotpassword'
            component={ForgotPasswordScreen}
            exact
          />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
