import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateTrip from './CreateTrip';
import EditTrip from './EditTrip';
import TripList from './TripList';


// this is the "main" component which sets up the React Router and respective routes
const France = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={TripList}/>
        {/*pass the id through the EditUser component*/}
        <Route path="/edit-trip/:id" component={EditTrip}/>
        {/*set the path to create a new user to CreateUser component*/}
        <Route path="/create-trip" component={CreateTrip}/>
       
      </div>
    </HashRouter>
  );
};

export default France;