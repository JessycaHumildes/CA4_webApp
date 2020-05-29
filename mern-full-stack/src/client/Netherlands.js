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
                            <h1 className="text">The Netherlands (or Holland) may be a small country, but it's packed with world famous icons. Discover our bulb fields, windmills, cheese markets, wooden shoes, canals of Amsterdam, masterpieces of Old Masters,
                             Delft Blue earthenware, innovative water-management and millions of bicycles.</h1>
                        </div>
                        <div className="column">
                            <img src="https://media.farandwide.com/4d/23/4d2304e289da493abd84654a329101ba.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

    export default Netherlands;