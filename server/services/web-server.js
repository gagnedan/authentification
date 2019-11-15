const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');

require('dotenv').config();

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);

    // Use cors
    app.use(cors());

    // Combines logging info from request and response
    app.use(morgan('combined'));

    // Use bobyParser middleware
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());

    // Mount the router at /api so all its routes start with /api
    app.use('/api', router);

    function notFound(req, res, next) {
      res.status(404);
      const error = new Error('Not Found - ' + req.originalUrl);
      next(error);
    }

    function errorHandler(err, req, res, next) {
      res.status(res.statusCode || 500);
      res.json({
        message: err.message,
        stack: err.stack
      });
    }

    app.use(notFound);
    app.use(errorHandler);

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