import React from 'react';
import './App.css';
import './bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches.js';
import Launch from './components/Launch.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <div className="container">
            <h1>SpaceX</h1>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
