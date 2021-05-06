import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    getListings: [listing]
  }
  type listing {
    SALETYPE: String
    SOLDDATE: String
    PROPERTYTYPE: String
    ADDRESS: String
    CITY: String
    STATEORPROVINCE: String
    ZIPORPOSTALCODE: String
    PRICE: String
    BEDS: String
    BATHS: String
    LOCATION: String
    SQUAREFEET: String
    LOTSIZE: String
    YEARBUILT: String
    DAYSONMARKET: String
    STATUS: String
    NEXTOPENHOUSESTARTTIME: String
    NEXTOPENHOUSEENDTIME: String
    SOURCE: String
    FAVORITE: String
    INTERESTED: String
    LATITUDE: String
    LONGTITUDE: String
  }
`;
