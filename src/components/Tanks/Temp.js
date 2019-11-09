import React, { Component } from 'react';
// import tanks from "../../Data/tanks.json";
import './Tanks.css';


class Temp extends Component {

//     state = {
//         tanks
//     }

//     constructor(props){
//         super(props);
//         this.getHeader = this.getHeader.bind(this);
//         this.getRowsData = this.getRowsData.bind(this);
//         this.getKeys = this.getKeys.bind(this);
//         }

//     getKeys = function(){
//         return Object.keys(this.props.data[0]);
//     }

//     getHeader = function(){
//         var keys = this.getKeys();
//         return keys.map((key, index)=>{
//         return <th key={key}>{key.toUpperCase()}</th>
//         })
//     }

//     getRowsData = function(){
//         var items = this.props.data;
//         var keys = this.getKeys();
//         return items.map((row, index)=>{
//         return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
//         })
//     }
    
//     render() {
//     return (
//     <div>
//     <table>
//     <thead>
//     <tr>{this.getHeader()}</tr>
//     </thead>
//     <tbody>
//     {this.getRowsData()}
//     </tbody>
//     </table>
//     </div>
    
//     );
//     }

// RenderRow = (props) =>{
//         return props.keys.map((key, index)=>{
//         return <td key={props.data[key]}>{props.data[key]}</td>
//         })
//     }
//    }
  

    // renderTable() {
    //     return this.state.tanks.map(tank => {
    //         return (
    //             <tr key={tank.id}>
    //             <td>{tank.displayName}</td>
    //             <td>{tank.temperature}</td>
    //             </tr>
    //         )
    //         })
    // }
    
    // render() {
    //     return (
    //          <>
    //          <table>
    //              <tbody>
    //                  {this.renderTable()}
    //              </tbody>
    //          </table>
    //          </>   
    //     )
    // }
}

export default Temp


  // getTankTemperature = (timeout = 0, fail = false) => {
    //     const response = {
    //         tanks: [
    //             { id: '1', displayName: 'FV 1', temperature: 67 }
    //         ],
    //     };
    //     return (response);
    // }

    //componentDidMount
    // componentDidMount() {
    //     API.getNotifications()
    //         .then(res => this.setState({ :  }))
    //         .catch(err => console.log(err))
    // }

    //componentDidUpdate