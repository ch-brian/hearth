import path from 'path';
import csv from 'csvtojson';

export const resolvers = {
  Query: {
    hello: (parent, args, context, info) => {
      return 'Hello!';
    },
    getListings: async (parent, args, context, info) => {
      const myJson = await csv()
        .fromFile(path.join(__dirname, '../db/redfin.csv'))
        .then((response) => {
          // Parse the response so the keys come back without spaces. We are just ignoring the keys with special characters for now and ommiting them from the type definition for a home
          return response.map((response) => {
            const formattedResponse = {};
            const keys = Object.keys(response).map((each) =>
              each.replace(' ', '')
            );
            const values = Object.values(response);
            keys.forEach((key, idx) => (formattedResponse[key] = values[idx]));
            return formattedResponse;
          });
        });
      console.log(myJson);
      return myJson;
    },
  },
};
