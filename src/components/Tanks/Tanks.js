import React, { Component } from 'react';
import tanks from "../../tanks.json";
import './Tanks.css';
import firebase from "firebase";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


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