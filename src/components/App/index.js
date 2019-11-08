import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';
import { withFirebase } from '../Firebase';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
  );
  const NavigationAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
  const NavigationNonAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr/>
          ...
        </div>
      </Router>
    );
  }
}

// export default withFirebase(App);
export default App;