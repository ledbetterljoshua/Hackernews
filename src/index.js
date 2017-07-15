import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';

import {ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj51sgza1fovr01964bn2tade'
});

const client = new ApolloClient({
   networkInterface
});



ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={ client }>
            <App />
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
