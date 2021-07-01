import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SearchBox from "./components/SearchBox/SearchBox";
import NavBar from "./components/NavBar/NavBar";
import "tachyons";
import * as pages from "./pages";
import WithMovies from "./WithMovies";

export default class App extends Component {
  render() {
    return (
      <WithMovies>
        <div className="bg-near-black near-white">
          <div className="flex items-center justify-between pa2">
            <h2>Movie App</h2>
            <NavBar />
            <SearchBox onSearch={this.onSearchChange} />
          </div>

          <Switch>
            <Route path="/" exact>
              <pages.Home />
            </Route>
            <Route path="/popular" exact>
              <pages.Popular />
            </Route>
            <Route path="/toprated" exact>
              <pages.TopRated />
            </Route>
            <Route path="/new" exact>
              <pages.New />
            </Route>
          </Switch>
        </div>
      </WithMovies>
    );
  }
}
