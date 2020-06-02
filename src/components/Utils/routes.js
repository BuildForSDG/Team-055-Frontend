import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// available on all pages
import TopNavBar from "../views/TopNavBar";
import SideNavBar from "../views/SideNavBar";
import Footer from "../views/Footer";

// navigate between pages
import Home from "../views/Home";
import About from "../views/About";
import MentalHealthCategory from "../views/MentalCondition/MentalHealthCategory";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import TakeTest from "../views/MentalCondition/TakeTest";

//var hist = createBrowserHistory();

export class Routes extends Component {
  state = {
    showSidebar: false,
    mentalconditions: [],
    isLoading: true,
    errors: null,
  };

  async componentDidMount() {
    const url =
      "https://evening-mesa-59655.herokuapp.com/api/mental-conditions";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      mentalconditions: data.data,
      isLoading: false,
    });
  }

  closeSidebar = () => {
    this.setState({ showSidebar: false });
  };

  SidebarToggle = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <TopNavBar toggleSidebar={this.SidebarToggle} />
        <SideNavBar closed={this.SidebarToggle} show={this.state.showSidebar} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/categories"
            render={(props) => (
              <MentalHealthCategory
                {...props}
                isLoading={this.state.isLoading}
                mentalconditions={this.state.mentalconditions}
              />
            )}
          />
          <Route path="/mentaltest" component={TakeTest} />
          <PublicRoute path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
