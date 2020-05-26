import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Trip from './Trip';
import Greece from './Greece';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the users array
class Home extends Component {
    constructor(props) {
        super(props);
        // store the users array in the state
        this.state = { trips: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateTrips = this.updateTrips.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all user data from the server when the component mounts
    componentDidMount() {
        this.updateTrips();
    }

    //
    updateTrips() {
        // get the users API using axios GET request to the server 
        axios.get('api/trips')
            .then(response => {
                //store the response in the state
                this.setState({ trips: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(tripId) {
        // make a DELETE request to the server which will handle the removal of the user with the specific userId
        axios
            .delete('api/trips', {
                data: {
                    id: tripId
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of users
                this.updateTrips();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a User component for each user object
        const tripList = this.state.trips.map(u => (
            //map through each element in the array and set to the value received from the server
            <Trip
                key={u._id}
                id={u._id}
                title={u.title}
                first={u.first}
               
                image={u.picture}
                quote={u.quote}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of users
        return (
            <div className="is-fluid">
               <h1 className="navbar-item title  has-text-danger">List of trips</h1>
                <hr />
                {/*USER LIST*/}
                <div>
                    <div className="columns is-multiline is-centered " >
                        {home}
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;