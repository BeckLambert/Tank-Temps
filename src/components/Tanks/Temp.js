import React, { Component, Route } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';


class Temp extends Component {

    state = {
      setTemp: ""
    };

    onChange =  (event) => {
      const { setTemp } = event.target;
    };

    onSubmit = (event) => {
      event.preventDefault()
      const { setTemp } = this.state;
    };

  render() {

    const { setTemp } = this.state;

    const handleSignOut = () => {
      firebase.auth().signOut()
  }
   return (
  <>
    <div className="col-sm-2">
    <SignOut onClick={handleSignOut} type="submit"  className="btn btn">Sign Out</SignOut>
    <Tanks onClick={<Route exact path='/tank'/>} type="submit"  className="btn btn">Tanks</Tanks>
    </div>

      <Form>
      <div className="form-row">
     
      <div className="col-md-2 offset-md-5 align-items-start">
      <p>Set target temp here:</p>
      <input  
              type="text"
              name="setTemp"
              value={this.setTemp}
              onChange={this.onChange}
              placeholder="Target Temp"/>
              
      </div>
      <div className="col-md-10 offset-sm-6 align-items-center">
      <Submit onClick={this.onSubmit} type="submit" className="btn sm">Submit</Submit>
      </div>

      </div>
      </Form>
   </>  
   )
   
  };

};

export default Temp


const Submit = styled.button `
  margin-top: 10px;
  background-color: grey;
  border-radius: 25px;
  height:35px;
  width: 75px;
`
const Form = styled.form`
    margin-top: 35px;
`

const SignOut = styled.button `
  border-radius: 65px;
  background-color: #185875;
  color: yellow;
  margin-top: -65px;
  margin-left: 5px;
`
const Tanks = styled.button `
border-radius: 65px;
background-color: #185875;
margin-top: 1px;
margin-left: 5px;
color: yellow;
`