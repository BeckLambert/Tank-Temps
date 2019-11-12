import React, { Component } from 'react';
import tanks from "../../tanks.json";
import './Tanks.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
const firebase = require("firebase");
require("firebase/firestore");// Required for side-effects

// import styled from 'styled.components';

// const Container = styled.section `
// text-align: left;
// overflow: hidden;
// width: 80%;
// margin: 0 auto;
// display: table;
// padding: 0 0 8em 0;
// `

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
           
           <div className="col-md-6">
               <table>
                   <thead>
                       <th>Display Name</th>
                       <th>Tempurature</th>
                   </thead>
                   <tbody>
                       {this.state.tanks.map(tank => (
                           <tr key={tank.id}>
                               <td>{tank.displayName}</td>
                               <td className="temperature">{tank.temperature}</td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
        
           </>
           
           
            
        )
    }

}

export default Tank