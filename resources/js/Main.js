import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore();

// store.subscribe(() => {
//     // saveState(store.getState());
//     saveState({
//         updatedBadge: store.getState().updatedBadge
//     });
// });

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById("kraken-app")
);
