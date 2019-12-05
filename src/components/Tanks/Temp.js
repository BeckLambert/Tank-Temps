import React, { Component } from 'react';
import styled from 'styled-components';



const Submit = styled.button `
  margin-top: 10px;
  background-color: grey;
  border-radius: 25px;
`
const Form = styled.form`
    margin-top: 35px;
`

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
   return (
  <>
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
      <Submit onClick={this.onSubmit} type="submit" className="btn btn">Submit</Submit>
      </div>

      </div>
      </Form>
   </>  
   )
   
  };

};

export default Temp
