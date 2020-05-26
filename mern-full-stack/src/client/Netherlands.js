import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';


// this is the "main" component which sets up the React Router and respective routes
class Netherlands extends Component {
    render() {
        return (
           
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                <div className="hero-body container">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <h2 className="subtitle">The Netherlands</h2>
                        </div>
                        <div className="column">
                            <img src="https://www.ourescapeclause.com/wp-content/uploads/2019/03/AthensPArthenon7-1170x789.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

    export default Netherlands;