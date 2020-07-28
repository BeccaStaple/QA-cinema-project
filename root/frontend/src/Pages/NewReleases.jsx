import React from "react";
import "../index.css";
import { Switch, Route } from "react-router-dom";
import { Releases } from "../PageComponents/moviedetail/Releases";
import { MovieDetail } from "../PageComponents/moviedetail/MovieDetail";

export function NewReleases() {
  return (
    <main>
      <Switch>
        <Route path="/newReleases" component={Releases} exact />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default NewReleases;
