import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './SignIn';
import Register from './Register';
const MainRoute = () =>  (
    <Switch>
        <Route exact path={["/", "login"]} component={Login} />
        <Route exact path='/register' component={Register} />
    </Switch>
)

export default MainRoute;