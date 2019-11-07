import React, { Component } from 'react';
import './Tanks.css';

class Tank extends Component {

state = {
    tanks: [],
    displayName: [],
    temperature: []
}

    getTankTemperature = (timeout = 0, fail = false) => {
        const response = {
            tanks: [
                { id: '1', displayName: 'FV 1', temperature: 67 }
            ],
        };
    return(response);
}

//componentDidMount


//componentDidUpdate


render() {
    return (
        <Container fluid>
            <Col size="md-6">
            <Tr>

            </Tr>
            </Col>
        </Container>
    )
}

}

