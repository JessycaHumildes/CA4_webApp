import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';
import TripList from './TripList';
import Greece from './Greece';
import logo from './images/logo.png'


// this is the "main" component which sets up the React Router and respective routes
const App = () => {
    return (
        <HashRouter>
            <div className="App">
                {/* <TripList/> */}

                {/*Navigation bar*/}
                <nav className="navbar">
                    <a className="navbar-item">
                        <Link to={'/'}>
                            <img src={logo} />
                        </Link>
                    </a>
                    {/*when this button is pressed, CreateUser component will be rendered by using React Router*/}
                    <Link to={'/create-trip'} className="navbar-item">
                        <button className="button is-danger" type="button">Add new trip</button>
                    </Link>
                    <Link to={'/netherlands'} className="navbar-item">
                        <button className="button is-success" type="button">Netherlands</button>
                    </Link>

                    <Link to={'/greece'} className="navbar-item">
                        <button className="button is-success" type="button">Greece</button>
                    </Link>

                    <Link to={'/france'} className="navbar-item">
                        <button className="button is-primary" type="button">France</button>
                    </Link>

                    <Link to={'/home'} className="navbar-item">
                        <button className="button is-info" type="button">Home</button>
                    </Link>

                    <Link to={'/about'} className="navbar-item">
                        <button className="button is-warning" type="button">About</button>
                    </Link>
                </nav>


                <Switch>
                    {/*SERVERSIDE: Link the routes to components*/}
                    <Route exact path="/" component={TripList} />
                    {/*pass the id through the EditUser component*/}
                    <Route path="/edit-trip/:id" component={EditTrip} />
                    {/*set the path to create a new user to CreateUser component*/}
                    <Route path="/create-trip" component={CreateTrip} />
                    {/*set the path to create a new user to CreateUser component*/}
                    <Route path="/greece" exact component={Greece} />
                </Switch>
            </div>
            {/*FOOTER*/}
            <footer className="footer has-background-danger">
                <div className="content has-text-centered">
                    <p className="has-text-white-bis"><strong>JHumildes</strong> styled with Bulma.</p>
                </div>
            </footer>
        </HashRouter>

    );
};

export default App;
