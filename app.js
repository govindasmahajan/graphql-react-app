const express = require('express');
const GraphQLHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', GraphQLHTTP({
    schema
}))
app.listen(4000, () => {
    console.log(`  Listening on 4000 for GraphQL !!!!`)
})