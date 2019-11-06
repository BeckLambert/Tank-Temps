import React, { Component } from 'react';
import './Tanks.css';

class Tank extends Component {

    getTankTemperature = (timeout = 0, fail = false) => {
        const response = {
            tanks: [
                { id: '1', displayName: 'FV 1', temperature: 67 },
                { id: '2', displayName: 'FV 2', temperature: 33 },
                { id: '3', displayName: 'FV 3', temperature: 73 },
                { id: '4', displayName: 'FV 4', temperature: 34 },
                { id: '5', displayName: 'FV 5', temperature: 66 },
                { id: '6', displayName: 'FV 6', temperature: 69 },
                { id: '7', displayName: 'FV 7', temperature: 70 },
                { id: '8', displayName: 'FV 8', temperature: 69 },
                { id: '9', displayName: 'FV 9', temperature: 70 },
                { id: '10', displayName: 'FV 10', temperature: 35 },
                { id: '11', displayName: 'FV 11', temperature: 69 },
                { id: '12', displayName: 'FV 12', temperature: 35 },
                { id: '13', displayName: 'FV 13', temperature: 37 },
                { id: '14', displayName: 'FV 14', temperature: 71 },
                { id: '15', displayName: 'FV 15', temperature: 33 },
                { id: '16', displayName: 'FV 16', temperature: 69 },
                { id: '17', displayName: 'FV 19', temperature: 62 },
                { id: '18', displayName: 'BT 1', temperature: 70 },
                { id: '19', displayName: 'BT 2', temperature: 69 },
                { id: '20', displayName: 'BT 3', temperature: 33 },
                { id: '21', displayName: 'BT 4', temperature: 71 },
            ],
        };
    return(response);
}

//componentDidMount
//componentDidUpdate

// render() {
//     return (

//     )
// }

}

