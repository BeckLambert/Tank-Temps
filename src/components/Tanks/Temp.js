import React, { Component } from 'react';
import styled from 'styled-components';

// import './Tanks.css';

const Submit = styled.button `
  margin-top: 10px;
  background-color: grey;
  border-radius: 25px;
`
const Form = styled.form`
    margin-top: 35px;
`


class Temp extends Component {

  render() {
    return (
  <>
      <Form>
      <form>
       
      <div className="form-row">
     
      <div className="col-md-2 offset-md-5 align-items-start">
      <p>Set target temp here:</p>
      <input type="text" class="form-control" placeholder="Target Temp"/>
      </div>
      <div className="col-md-10 offset-sm-6 align-items-center">
      <Submit><button type="submit" class="btn btn">Submit</button></Submit>
      </div>

      </div>
     
      </form>
      </Form>
   </>  

    )
  }

}

export default Temp
