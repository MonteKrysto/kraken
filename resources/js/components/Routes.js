import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './login/Login';

class Routes extends Component {

    render() {

        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={() => (<p>here</p>)} />
                    <Route exact path="/login" render={() => <Login/>}/>
                </Switch>
            </Fragment>
        )

    }

}

export default Routes