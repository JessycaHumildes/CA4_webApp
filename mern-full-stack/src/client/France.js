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
                <div className="hero-body container">
                    <div className="background">
                        <div className="background is-three-fifths">
                            <h2 className="subtitle">Greece</h2>
                        </div>
                        <div className="background">
                            <img src="https://blog.rentcars.com/wp-content/uploads/2012/05/franca-paris-e1574190904967.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

    export default France;
