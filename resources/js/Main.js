import React, {Component} from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';

const defaultState = {
    isLoading: false
};
const client = new ApolloClient({
    uri: 'https://something.com',
    clientState: {
        defaults: defaultState
    }
});


class Main extends Component {

    render() {
        console.log('client is = ', client)
        return (
            <ApolloProvider client={client}>
                <Router>
                    <App/>
                </Router>
            </ApolloProvider>
        )

    }

}

export default Main;

ReactDOM.render(<Main/>, document.getElementById('kraken-app'));

// ReactDOM.render(
//     <ApolloProvider client={client}>
//         <Router>
//             <App/>
//         </Router>
//     </ApolloProvider>,
//     document.getElementById("kraken-app")
// );
