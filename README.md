# Hearth Takehome

## Tech Stack:

- React, hooks, lazy, suspense
- Apollo Client
- Node
- Express
- Apollo Server
- Docker

## To run the application locally:

### Production:

`npm run build`  
`npm run server`

- App will spin up at [http://localhost:8080/](http://localhost:8080/)

### Development:

`npm run dev`

- React app will spin up at [http://localhost:3000/](http://localhost:3000/) via webpack dev server
- Server will spin up at localhost:8080 via nodemon
- API calls are proxied to 8080 via proxy: 8080 in package.json.

### Alternatively:

`docker build -t [image name] .`  
`docker run -p 8080:8080 [image name]`

- Running these cli commands will spin up a containerized version of the app at [http://localhost:8080/](http://localhost:8080/)

### Thoughts and Considerations:

- Parsing the csv to json and reassigning keys containing spaces and special characters on server instantiation would be more performant than doing it on every request to getMatchingListings in the API. This could be accomplished by parsing the csv at the top of the express server instantiation and awaiting a fs.writeFileSync of the resulting json prior to any express logic at the top of server.js. I wasn't sure if the prompt was asking for all of this logic within the 'single endpoint' though, so I placed this logic within the resolver. Ultimately, a lot of the performance hit for my implementation comes from having to sanitize all of the values in the json to make the search more friendly for the user w/ respect to capitalization and spacing typos.
- I felt that GraphQL was a pretty neat choice for this particular data-set since it seemed like there was a lot of unnecessary data coming back in the CSV that we could filter out by only asking for the data we were interested in on the network call. For example, our query in Dashboard.js is only asking for Price, Address, City, State, Zip, and Property Type while omitting all the other extra data we're not visualizing like longtitude, latitude, and favorite.
