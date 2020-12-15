import React from "react";
import { Route, Switch } from "react-router-dom";
import Styled from "styled-components";

import LoginView from "./Views/LoginView";
import FriendsListView from "./Views/FriendsListView";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  return (
    <StyledApp >
      <h1>Friends App</h1>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsListView} />
        <Route path="/login" component={LoginView} />
        <Route component={LoginView} />
      </Switch>
    </StyledApp>
  );
}

export default App;

const StyledApp = Styled.div`

`;
