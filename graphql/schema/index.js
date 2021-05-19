import 'graphql-import-node'
import typeDefs from './schema.graphql.js'
import resolvers from '../resolvers/resolversMap'
import { ApolloServer } from 'apollo-server-micro'

const schema = new ApolloServer({
    typeDefs,
    resolvers
})

export default schema;