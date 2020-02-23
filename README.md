# toolbox app
- A Server RESTful API for receive messages
- A Client React App for send messages

### Technologies
- JavaScript
- TypeScript
- Node.js and Express.js
- React, bootstrap and React Router
- jest, chai and supertest for testing
- webpack
- Docker

## How to use

```
git clone https://github.com/davidarce/toolbox-messages.git   

cd toolbox-messages

```

## Running the client 

```
cd client
npm install
npm run start:dev
```

`the client application is running now in http://localhost:4000`

## Running the express server  

```
cd server
npm install
npm run start:dev
```

`the express server is running now in http://localhost:8080`

## Running with Docker
### run this command under root directory `toolbox-messages`

```
docker-compose up --build 
```

## Now open in browser the app in `http://localhost`

# API Endpoints 


```
Messages:

- POST /messages - send a message

```

## Http Status Code Summary

```
201 OK - Message created
500 Internal Server error - The server has encountered a situation it doesn't know how to handle.
```
# Examples

## Messages Resources

### POST /messages

##### Example

###### Request

```
POST /messages
```

Body

```
{
	"message": "Hello world",
}
```

##### Response 201 created
```
{
    "value": "Hello world
}
```

