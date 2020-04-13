import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => (
                <div>
                  <h1>About the University</h1>
                  <p>
                  Bacon ipsum dolor amet kevin bresaola kielbasa, tail pork loin pig chicken cupim shank flank pancetta jerky. Doner tongue bacon, cupim beef burgdoggen turducken. Ground round strip steak pancetta tenderloin, alcatra biltong beef ribs jerky kielbasa turkey sirloin short ribs brisket ham hock prosciutto. Capicola tail turducken picanha pork loin pastrami. Tongue flank buffalo sausage kevin pork belly sirloin corned beef bacon ground round pig jowl biltong.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}