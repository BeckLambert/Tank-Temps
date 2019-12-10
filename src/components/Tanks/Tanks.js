import styled from 'styled-components';
import React, { Component } from 'react';
import tanks from "../../tanks.json";
import { Link } from 'react-router-dom';
// import { askForPermissionToReceiveNotifications } from '../../push-notifications';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const messaging = firebase.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('Have Permission')
        return messaging.getToken();
    })
    
    .then(function(token){
        console.log(token)
    })
    .catch(function (err) {
        console.log('Error Occured')
    })

messaging.onMessage(function(payload){
    console.log('onMessage: ', payload)
});

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

        docRef.onSnapshot({
            next: (snapshot => {
                this.setState({ temp: snapshot.data().temperature });
            })
        })
    }

    render() {
        const handleSignOut = () => {
            firebase.auth().signOut()
        }
        let temp = this.state.temp.toFixed(2)
        return (
            <>
                <SignOut onClick={handleSignOut} type="submit"  className="btn btn">Sign Out</SignOut>
                {/* <Notification onClick={messaging} type="submit" className="btn btn">
                    Click here to receive notifications
                </Notification> */}

                <Container>
                    <div className="col-md-8">
                        <table>
                            <thead>
                                <Th>Tank</Th>
                                <ThOne>Temperature</ThOne>
                            </thead>
                            <tbody>
                                    <Tr><Link style={{paddingLeft: "5%"}}to={{ pathname: '/temp' }}>FV 1</Link>
                                    <Td className="livetemp">{temp}  &deg;F</Td></Tr>
                                {this.state.tanks.map(tank => (
                                    <Tr key={tank.id}>
                                        <Td><Link to={{ pathname: '/temp' }}>{tank.displayName}</Link></Td>
                                        <Td className="temperature">{tank.temperature} &deg;F</Td>
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


//STYLING COMPONENTS

const SignOut = styled.button `
  border-radius: 65px;
  background-color: #185875;
  margin-top:  -65px;
  margin-left: 10px;
  color: yellow;
`

// const Notification = styled.button`
//     border-radius: 65px;
//     background-color: #185875;
//     margin-top: 5px;
//     margin-left: 10px;
//     color: yellow;
// `

const Container = styled.section`
    text-align: left;
    overflow: hidden;
    width: calc(100vw - 20px);
    margin: auto;
    display: table;
    padding: 0 0 8em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    font-weight: bold;
    font-size: 1em;
    color: #185875;
    background-color: #1F2739
    `

const Td = styled.td`
    padding-bottom: 3%;
    padding-top: 3%;
    padding-left:2%;
    font-weight: normal;
    font-size: 1em;
    border-style: groove;
    border-color: grey;
    color: #FB667A;
    `

const Tr = styled.tr`
    background-color: #323C50;
    padding-bottom: 3%;
    padding-top: 3%;
    padding-left:5%;
    padding-right: 50px;
    border-style: groove;
    border-color: grey;
    color: #FB667A;
    `

const Th = styled.th`
    padding-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    background-color: #1F2739
    width: 1180px;
    `

const ThOne = styled.th`
    padding-bottom: 2%;
    padding-top: 2%;
    font-weight: bold;
    font-size: 1em;
    text-align: center;
    color: #185875;
    background-color: #1F2739
    width: 1180px;
    margin-left: 30px;
    `