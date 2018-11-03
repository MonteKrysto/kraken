import React, { Component, Fragment } from 'react';

import Routes from './Routes';

export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div className="app-inner chrome-blur-height-fix">
                    <Routes/>
                </div>
            </Fragment>
        )
    }
}

