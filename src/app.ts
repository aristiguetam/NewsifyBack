import exprees from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';

export const startApolloServer = async (typeDefs: any, resolvers: any) => {

    const app = exprees();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    
    app.use(
        '/graphql',
        cors(),
        exprees.json(),
        expressMiddleware(server)
    )
    
    await httpServer.listen({ port: 4000 });
    
    console.log(`Server ready at http://localhost:4000/ `);
}
