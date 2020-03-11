import React from "react";
import LoginContainer from "../modules/container/LoginContainer";
import LogoutContainer from "../modules/container/LogoutContainer";
import { Switch, Route } from "react-router-dom";
import Home from "../modules/components/Home";
import CheckInPageContainer from "../modules/container/CheckInPageContainer";
import { BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route path='/home' component={Home} />
        <Route path='/logout' component={LogoutContainer} />
        <Route path='/checkin/:id' component={CheckInPageContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
