import styled from 'styled-components';
import React, { Component } from 'react';
import tanks from "../../tanks.json";
import './Tanks.css';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
const firebase = require("firebase");
require("firebase/firestore");// Required for side-effects

const Container = styled.section `
text-align: left;
overflow: hidden;
max-width: 950px;
margin: 0 auto;
display: table;
padding: 0 0 8em 0;
`

const Td = styled.td`
padding-bottom: 2%;
padding-top: 2%;
padding-left:2%;
font-weight: normal;
font-size: 1em;
-webkit-box-shadow: 0 2px 2px -2px #0E1119;
 -moz-box-shadow: 0 2px 2px -2px #0E1119;
      box-shadow: 0 2px 2px -2px #0E1119;
width: 1050px;
`

const Tr = styled.tr`
background-color: #323C50;
padding-bottom: 2%;
padding-top: 2%;
padding-left:5%;
padding-right: 50px;
width: 1050px;
`

const Th = styled.th`
padding-bottom: 2%;
padding-top: 2%;
padding-left:20%;
padding-right: 50px;
font-weight: bold;
font-size: 1em;
text-align: center;
color: #185875;
background-color: #1F2739;
width: 950px;
`

class Tank extends Component {

    state = {
        tanks
    }

    
    render() {
     const handleSignOut = () => {
            firebase.auth().signOut()
          }
        return (
           <>
           <button onClick={handleSignOut}>Sign Out</button>
           <Container>
           <div className="col-md-6">
               <table>
                   <thead>
                       <Th>
                       <th>Display Name</th>
                       <th>Tempurature</th>
                       </Th>
                   </thead>
                   <tbody>
                       {this.state.tanks.map(tank => (
                          <Tr> <tr key={tank.id}>
                           <Td><td>{tank.displayName}</td>
                               <td className="temperature">{tank.temperature}</td></Td>
                           </tr>
                           </Tr>
                       ))}
                   </tbody>
               </table>
           </div>
           </Container>
           </>
           
           
            
        )
    }

}

export default Tank