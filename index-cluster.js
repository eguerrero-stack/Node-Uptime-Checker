/*
Primary File for API
*/

//Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var cluster = require("cluster");
var os = require("os");

//Declare the app
var app = {};

//Initialization function

app.init = function (callback) {
  //If we're on the master thread, start the background workers and the CLI
  if (cluster.isMaster) {
    //Start the workers
    workers.init();

    //Start the CLI, but make sure it starts last
    setTimeout(function () {
      cli.init();
      callback();
    }, 50);

    //Fork the process
    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }
  } else {
    //If we're not in the master thread, start the http server
    server.init();
  }
};

// Self invoking only if required directly
if (require.main === module) {
  app.init(function () {});
}

//Export the app
module.exports = app;
