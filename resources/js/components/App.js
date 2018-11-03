import React, { Component, Fragment } from 'react';
import Routes from './Routes';
import LeftNav from "./LeftNav/LeftNav";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <LeftNav/>
                <div className="app-inner">
                    <Routes/>
                </div>
            </Fragment>
        )
    }
}

export default App;
