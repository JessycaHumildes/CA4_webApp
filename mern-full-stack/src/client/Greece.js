import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';


// this is the "main" component which sets up the React Router and respective routes
class Greece extends Component {
    render() {
        return (
            // <HashRouter>
            //   <div>
            //     {/*SERVERSIDE: Link the routes to components*/}
            //     <Route exact path="/" component={TripList}/>
            //     {/*pass the id through the EditUser component*/}
            //     <Route path="/edit-trip/:id" component={EditTrip}/>
            //     {/*set the path to create a new user to CreateUser component*/}
            //     <Route path="/create-trip" component={CreateTrip}/>

            //   </div>
            // </HashRouter>
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                <div className="hero-body container">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <h2 className="subtitle">Hero subtitle</h2>
                        </div>
                        <div className="column">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/User-welcome.png" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

    export default Greece;