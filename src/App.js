import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Videos from "./components/Videos";
import SideBar from "./components/SideBar";
import SearchPage from "./components/SearchPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [slide, setSlide] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header
          onMenuClick={() => setSlide(!slide)}
          onSearchClick={() => setSlide(!slide)}
        />
        <div className="videoContainer">
          <SideBar style={slide ? { width: 68, position: "absolute" } : {}} />
          <Switch>
            <Route path="/search/:searchTerm">
              <SearchPage className={slide ? "afterMenuSlide" : ""} />
            </Route>
            <Route exact path="/">
              <Videos className={slide ? "afterMenuSlide" : ""} />
            </Route>
            <Route path="/notfound">
              <NotFoundPage className={slide ? "afterMenuSlide" : ""} />
            </Route>
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
