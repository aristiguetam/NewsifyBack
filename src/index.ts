
import { startApolloServer } from './app'
import { resolvers, typeDefs } from './graphql/index'
import { connectDB } from './db'

connectDB()

startApolloServer(typeDefs, resolvers)
