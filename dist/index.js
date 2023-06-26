"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const index_js_1 = require("./graphql/index.js");
const db_js_1 = require("./db.js");
(0, db_js_1.connectDB)();
(0, app_js_1.startApolloServer)(index_js_1.typeDefs, index_js_1.resolvers);
