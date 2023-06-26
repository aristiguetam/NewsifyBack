"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
    type Query {
        hello: String
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
        author: String!
        title: String!
        description: String!
        url: String!
        source: String!
        image: String!
        category: String!
        language: String!
        country: String!
        createdAt: String
        updatedAt: String
    }

`;
