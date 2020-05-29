import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';


// this is the "main" component which sets up the React Router and respective routes
class Greece extends Component {
    render() {
        return (
           
            <section className="hero is-bold is-light is-fullheight-with-navbar">
                <div className="hero-body container">
                    <div className="background">
                        <div className="background is-three-fifths">
                            <h2 className="subtitle">Greece</h2>
                            <h1 className="text">Greece has the longest coastline in Europe and is the southernmost country in Europe. The mainland has rugged mountains, forests, and lakes, but the country is well known for the thousands of islands dotting the blue Aegean Sea to the east, the Mediterranean Sea to the south, and the Ionian Sea to the west.

The country is divided into three geographical regions: the mainland, the islands, and Peloponnese, the peninsula south of the mainland.</h1>
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

    export default Greece;