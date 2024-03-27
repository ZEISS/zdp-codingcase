# Zeiss Machine Data API

This project is a REST API built with TypeScript and Express.js that exposes machine data as JSON. It can be run as a local Docker container.

## Running the Application

To run the application as a local Docker container, follow these steps:

1. Make sure you have Docker installed on your machine.
2. Build the Docker image by running the following command in the project root directory:
   ```
   docker compose up --build
   ```

4. The API will be accessible at `http://localhost:3000/api/v1` and the WebSocket at `ws://localhost:4000`.
5. A sample connection to the Websocket is implemented under ws-connect->wsConnection.js.
6. Shut the Docker container down by running the following command in the project root directory:
```
docker compose down
```

## API Documentation

The API exposes the following endpoints:

- `GET /machines`: Retrieves all machines and their status.
- `GET /machines/:id`: Retrieves the event history for one specific machine identified by the UUID.

Please refer to the source code for more details on the request and response formats.