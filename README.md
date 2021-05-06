# Heart Takehome

## Tech Stack

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
