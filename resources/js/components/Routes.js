import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer';

class Routes extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={() => <MainContainer/>} />
                </Switch>
            </Fragment>
        )

    }

}

export default Routes