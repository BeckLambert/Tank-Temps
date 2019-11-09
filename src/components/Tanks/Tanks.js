import React, { Component } from 'react';
import tanks from "../../tanks.json";
import './Tanks.css';


class Tank extends Component {

    state = {
        tanks
    }

    render() {
        return (
           <>
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