import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';


// this is the "main" component which sets up the React Router and respective routes
class France extends Component {
    render() {
        return (
           
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                <div className="hero-body container is-background-info">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <h2 className="subtitle">France</h2>
                        </div>
                        <div className="column">
                            <img src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/71/51/87/untitled-design-293.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

    export default France;
