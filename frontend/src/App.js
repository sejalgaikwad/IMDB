import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';


// components

//import Register from './components/Register'
//import Login from './components/Login'

import AddMovies from './components/movies/AddMovies'

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
        
               <AddMovies />
           
            </div>
        </ApolloProvider>
    );
  }
}


export default App;