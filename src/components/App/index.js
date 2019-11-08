import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
import SignOutButton from '../SignOut';
import * as ROUTES from '../../Pages/Routes';
import Navigation from '../Navigation';
=======
import SignOutButton from '../../Pages/SignOut';
import * as ROUTES from '../../Pages/Routes';
import Navigation from '../../Pages/Navigation';
import Tank from "../Tanks/Tanks"
>>>>>>> e2bdb736210601ddbd42795c5561cfee03a373cc
// import { withFirebase } from '../Firebase';
// import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
// import SignInPage from '../SignIn';
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import AccountPage from '../Account';
<<<<<<< HEAD


Navigation = ({ authUser }) => (
=======
// import AdminPage from '../Admin';
// import Tank from '../Tanks/Tanks';

const Nav = ({ authUser }) => (
>>>>>>> e2bdb736210601ddbd42795c5561cfee03a373cc
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
  );
  const NavigationAuth = () => (
    <ul>
      <li>
        <Link to="/temp">Landing</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={"/tank/" + Tank._id}>Account</Link>
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
          <Nav authUser={this.state.authUser} />
          <hr/>
          ...
        </div>
      </Router>
    );
  }
}

// export default withFirebase(App);
export default App;