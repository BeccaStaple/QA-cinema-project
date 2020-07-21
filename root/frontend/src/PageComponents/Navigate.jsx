import React from "react";
import HomePage from "../Pages/HomePage";
import Listings from "../Pages/Listings";
import OpeningTimes from "../Pages/OpeningTimes";
import NewReleases from "../Pages/NewReleases";
import Screens from "../Pages/Screens";
import Bookings from "../Pages/Bookings";
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

export default function Navigate() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/listings" component={Listings}/>
            <Route exact path="/opening-times" component={OpeningTimes}/>
            <Route exact path="/new-releases" component={NewReleases}/>
            <Route exact path="/screens" component={Screens}/>
            <Route exact path="/bookings" component={Bookings}/>
        </Switch>
    </Router>
    
    );
}