import React from "react";
import {Switch,Route} from "react-router-dom";

import Reading from "./Components/Reading/Reading";
import ToRead from "./Components/ToRead/ToRead";
import Read from "./Components/Read/Read";

export default(
    <Switch>
        <Route exact path="/" component={Reading}/>
        <Route path="/to_read" component={ToRead}/>
        <Route path="/already_read" component={Read}/>
    </Switch>
)