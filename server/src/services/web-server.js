const http = require('http');
const express = require('express');
const morgan = require('morgan');
const router = require('./router.js');

require('dotenv').config();

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

    // Combines logging info from request and response
    app.use(morgan('combined'));

    // Mount the router at /api so all its routes start with /api
    app.use('/api', router);

    httpServer
      .listen(process.env.PORT)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${process.env.PORT}`);

        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

// *** previous code above this line ***

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close(err => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;
module.exports.initialize = initialize;