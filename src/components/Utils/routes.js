import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getToken, removeUserSession } from "../Utils/Common";

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
import Result from "../views/MentalCondition/Result";

//var hist = createBrowserHistory();

export class Routes extends Component {
  state = {
    showSidebar: false,
    mentalconditions: [],
    isLoading: true,
    loggedIn: false,
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

  handleLogout = () => {
    removeUserSession();
    this.setState({
      loggedIn: false,
    });
  };

  LoginToggle = () => {
    this.setState((prevState) => {
      return { loggedIn: !prevState.loggedIn };
    });
  };
  handleLogin = () => {
    const token = getToken();
    if (token && token !== null) {
      this.setState({
        loggedIn: true,
      });
    }
  };

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
        <TopNavBar
          toggleSidebar={this.SidebarToggle}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedIn={this.state.loggedIn}
        />
        <SideNavBar
          closed={this.SidebarToggle}
          show={this.state.showSidebar}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          loggedIn={this.state.loggedIn}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" exact component={About} />
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

          <Route
            path="/mentaltest"
            render={(props) => (
              <TakeTest {...props} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route path="/result" exact component={Result} />
          <Route
            path="/signin"
            render={(props) => (
              <Login
                {...props}
                LoginToggle={this.LoginToggle}
                loggedIn={this.state.loggedIn}
              />
            )}
          />

          <Route path="/signup" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Routes;
