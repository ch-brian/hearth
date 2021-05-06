import path from 'path';
import csv from 'csvtojson';

export const resolvers = {
  Query: {
    hello: (parent, args, context, info) => {
      return 'Hello!';
    },
    getAllListings: async (parent, args, context, info) => {
      const myListings = await csv()
        .fromFile(path.join(__dirname, '../db/redfin.csv'))
        .then((response) => {
          // Mutate the response so the keys come back without spaces to match the graphql spec. I'm ignoring the keys with special characters for now and omitting them from the type definition for a home listing. )
          return response.map((res) => {
            console.log('MY RES: ', res.ADDRESS);

            const formattedResponse = {};
            const keys = Object.keys(res).map((each) =>
              // alternatively, we could use regex to replace spaces and special characters. We'd also need a conditional to parse the url key since it would still be a nonsense key even with the spaces and special characters removed. Maybe something like if(each.indexOf('URL) !== -1) return 'URL'
              each.replace(' ', '')
            );
            const values = Object.values(res);
            keys.forEach((key, idx) => (formattedResponse[key] = values[idx]));
            return formattedResponse;
          });
        });
      return myListings;
    },
    getMatchingListings: async (parent, args, context, info) => {
      const { searchString } = args;
      const formattedSearch = searchString
        .replace(/ /g, '')
        .toLowerCase()
        .trim();
      const myListings = await csv()
        .fromFile(path.join(__dirname, '../db/redfin.csv'))
        .then((response) => {
          return response.map((res) => {
            // find matching listings by address, state, and zip on the trimmed search string
            if (
              res.ADDRESS.replace(/ /g, '')
                .toLowerCase()
                .indexOf(formattedSearch) !== -1 ||
              res.CITY.replace(/ /g, '')
                .toLowerCase()
                .indexOf(formattedSearch) !== -1 ||
              res['STATE OR PROVINCE']
                .replace(/ /g, '')
                .toLowerCase()
                .indexOf(formattedSearch) !== -1 ||
              res['ZIP OR POSTAL CODE']
                .replace(/ /g, '')
                .toLowerCase()
                .indexOf(formattedSearch) !== -1
            ) {
              const formattedResponse = {};
              const keys = Object.keys(res).map((each) =>
                each.replace(/ /g, '')
              );
              const values = Object.values(res);
              keys.forEach(
                (key, idx) => (formattedResponse[key] = values[idx])
              );
              console.log(formattedResponse);
              return formattedResponse;
            } else {
              return null;
            }
          });
        });
      // filter out non-matching searches
      return myListings.filter((elem) => elem !== null);
    },
  },
};
