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
          // Mutate the response so the keys come back without spaces to match the graphql spec. I'm ignoring the keys with special characters for now and omitting them from the type definition for a home listing. )
          return response.map((response) => {
            const formattedResponse = {};
            const keys = Object.keys(response).map((each) =>
              // alternatively, we could use regex to replace spaces and special characters. We'd also need a conditional to parse the url key since it would still be a nonsense key even with the spaces and special characters removed. Maybe something like if(each.indexOf('URL) !== -1) return 'URL'
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
