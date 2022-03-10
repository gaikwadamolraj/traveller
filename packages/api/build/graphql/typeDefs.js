"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type City {
    id: Int
    name: String
    country: String
    visited: Boolean
    wishlist: Boolean
  }

  input CitiesFilters {
    id: Int
    name: String
    country: String
    visited: Boolean
    wishlist: Boolean
  }

  input CitiesMutationInput {
    id: Int
    visited: Boolean
    wishlist: Boolean
  }

  type CitiesResult {
    cities: [City]
    total: Int
  }

  type Query {
    cities(filter: CitiesFilters, limit: Int, offset: Int): CitiesResult
    city(id: Int!): City
  }

  type Mutation {
    updateCity(input: CitiesMutationInput): City
  }
`;
