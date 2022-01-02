import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";

import Footer from "./components/footer/Footer";
import Outro from "./components/outro/Outro";
import Meetme from "./pages/MeetMe/Meetme";
import Sayhi from "./pages/sayhi/Sayhi";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/meetme">
                <Meetme />
              </Route>
              <Route path="/sayhi">
                <Sayhi />
              </Route>
            </Switch>

            <Outro />
            <Footer />
          </div>
        </div>
      </div>{" "}
    </Router>
  );
}

export default App;
