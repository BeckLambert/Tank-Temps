import React, { Component } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';



class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A temp was submitted: ' + this.state.value);
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {

    const handleSignOut = () => {
       firebase.auth().signOut()
    }

    return (
      <>
     
      <SignOut onClick={handleSignOut} type="submit"  className="btn btn">Sign Out</SignOut>
      <Tanks type="submit"  className="btn btn"><Link to="/tank">Tanks</Link></Tanks>


      
      <Form onSubmit={this.handleSubmit}>
        <div className="form-row">
      <div className="col-md-2 offset-md-5 align-items-start">
        <label>
         <p>Set target temp here:</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        </div>
        <div className="col-md-10 offset-sm-6 align-items-center">
        <input type="submit" value="Submit" />
        </div>
        </div>
      </Form>

      </>
    );
  }
}

export default Temp


// STYLED COMPONENTS 

const Form = styled.form`
    margin-top: 55px;
`

const SignOut = styled.button `
border-radius: 45px;
background-color: #185875;
margin-top:  5px;
margin-left: 485px;
color: yellow;
width: 105px;
`
const Tanks = styled.button `
border-radius: 65px;
background-color: yellow;
margin-top: 5px;
margin-left: 10px;
`