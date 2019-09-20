require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const {typeDefs} = require('./graphql/schema')
const resolvers = require('./graphql/resolver').resolvers
const dbConfig = require('./config/mongoDB').mongoConnect();

const server = new ApolloServer({
  typeDefs,
    resolvers,
    // context: ({ req }) => ({
    //     // to get the user token/code from the query
    //     token: req.query.token,
    //     code: req.query.code,
    //     request:req
        
    // })
});

const app = express();

server.applyMiddleware({ app });

//  start server
app.listen(4000, () => {
  console.log("server started on 4000 port")
})