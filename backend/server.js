require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const {typeDefs} = require('./graphql/schema')
const resolvers = require('./graphql/resolver').resolvers
const dbConfig = require('./config/mongoDB').mongoConnect();
const cors = require('cors');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({
    req
  }) => ({
    token: req.query.token,
    origin: req.headers.origin,
    request: req
  })

});

const app = express();
app.use(cors());

server.applyMiddleware({ app });

//  start server
app.listen(4000, () => {
  console.log("server started on 4000 port")
})