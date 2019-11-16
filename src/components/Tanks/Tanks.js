import styled from 'styled-components';
import React, { Component } from 'react';
import tanks from "../../tanks.json";
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDUzI4kXKEpWapGiZ0f6nN0d0JQ7mrb9WU",
    authDomain: "tank-temps.firebaseapp.com",
    databaseURL: "https://tank-temps.firebaseio.com",
    projectId: "tank-temps",
    storageBucket: "tank-temps.appspot.com",
    messagingSenderId: "355631466975",
    appId: "1:355631466975:web:4bd593965c255922795c6a",
    measurementId: "G-V89HNETHYP"
};
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

class Tank extends Component {

    state = {
        tanks,
        temp: 0
    }

    componentDidMount() {
        this.getTemp();
    }

    getTemp = () => {
        const db = firebase.firestore()
        const docRef = db.collection("tanks").doc("1f50398e-062b-4dea-9e64-3cbcea7ecd9d");

        docRef.get().then(doc => {
            if (doc.exists) {
                console.log("Document data:", doc.data().temperature);
                this.setState({ temp: doc.data().temperature });
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        docRef.onSnapshot({next: (snapshot => {
            this.setState({ temp: snapshot.data().temperature });
        })})
    }

    render() {
        const handleSignOut = () => {
            firebase.auth().signOut()
        }
        let temp = this.state.temp.toFixed(2)
        return (
            <>
                <button onClick={handleSignOut}>Sign Out</button>
                <Container>
                    <div className="col-md-6">
                        <table>
                            <thead>
                                <Th>
                                    <th>Display Name</th>
                                    <td>Tempurature</td>
                                </Th>
                            </thead>
                            <tbody>
                                <Tr>
                                    <tr>FV 1
                            <Td><td className="livetemp">{temp}  &deg;F </td></Td>
                                    </tr>
                                </Tr>
                                {this.state.tanks.map(tank => (
                                    <Tr>
                                        <tr key={tank.id}>
                                            <Td><td><Link to={{ pathname: '/temp' }}>{tank.displayName}</Link></td>
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

const Container = styled.section`
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

    // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();