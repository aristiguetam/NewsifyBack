import { gql } from 'graphql-tag'

export const typeDefs = gql`
    type Query {
        hello: String
        getNews: [News]
        getNewsById(_id: ID!): News
    }

    type Mutation {
        importNewsFromApi: String
    }
    
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        role: String!
        createdAt: String
        updatedAt: String
    }

    type News {
        _id: ID!
        author: String
        title: String!
        description: String!
        url: String!
        source: String!
        image: String
        category: String!
        language: String!
        country: String!
        published_at: String!
        createdAt: String
        updatedAt: String
    }

`