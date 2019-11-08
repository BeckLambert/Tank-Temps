import React from 'react';
// import Firebase from '../../src/components/Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);


export default SignOutButton;
