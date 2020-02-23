import server from "./src/server";

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '8080');

/**
 * Listen on provided port, on all network interfaces.
 */

server.start(port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}