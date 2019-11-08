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
        return (response);
    }

    //componentDidMount
    // componentDidMount() {
    //     API.getNotifications()
    //         .then(res => this.setState({ :  }))
    //         .catch(err => console.log(err))
    // }

    //componentDidUpdate


    render() {
        return (
            <Container fluid>
                <Col size="md-6">
                    {this.state.tanks.map(tank => (
                        <>
                            <Tr
                                key={tank}
                                id="id"
                                className="displayName"
                                value={this.state.displayName}
                                to="/tank/:id"
                            />
                            <Td
                                key={tank}
                                id="id"
                                className="temerature"
                                value={this.state.temperature}
                                to="tank/:id"
                            />
                        </>
                    ))}
                </Col>
            </Container>
        )
    }

}

export default Tank

