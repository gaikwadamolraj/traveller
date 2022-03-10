"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const output_json_1 = __importDefault(require("./swagger/output.json"));
const swagger_1 = require("./swagger");
const typeDefs_1 = require("./graphql/typeDefs");
const resolvers_1 = require("./graphql/resolvers");
const errorHandler_1 = require("./middleware/errorHandler");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
async function startApolloServer(typeDefs, resolvers) {
    const PORT = 4000;
    const httpServer = http_1.default.createServer(exports.app);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs,
        resolvers,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({
        app: exports.app,
        path: '/graphql',
    });
    exports.app.use((0, cors_1.default)());
    exports.app.use(express_1.default.json());
    (0, swagger_1.endpoints)();
    exports.app.use('/rest', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(output_json_1.default));
    exports.app.use(errorHandler_1.errorHandler);
    await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`🚀 REST Server ready at http://localhost:${PORT}/rest`);
}
startApolloServer(typeDefs_1.typeDefs, resolvers_1.resolvers);
