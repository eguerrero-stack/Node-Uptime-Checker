/*
Primary File for API
*/
//Primary Commands to use debugger
/**
 * To start debugging: node-inspect {fileName}
 *
 * debugger = breakpoints
 *
 * Terminal commands :
 *
 * cont : to continue to next breakpoint
 *
 * repl : step in and check values at current place...foo is what now?
 */

//Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");
var exampleDebuggingProblem = require("./lib/exampleDebuggingProblem");
const { debug } = require("console");
//Declare the app
var app = {};

//Initialization function

app.init = function () {
  //Start the server
  debugger;
  server.init();
  debugger;

  //Start the workers
  debugger;
  workers.init();
  debugger;

  //Start the CLI, but make sure it starts last
  setTimeout(function () {
    cli.init();
  }, 50);
  debugger;

  //Set foo at 1
  var foo = 1;
  console.log("Just assigned 1 too foo");
  debugger;

  //Increment foo
  foo++;
  console.log("just incremented");
  debugger;

  //Square foo
  foo = foo * foo;
  console.log("Just squared foo");
  debugger;

  //Convert foo to a string
  foo = foo.toString();
  console.log("Foo to string");
  debugger;

  //Call the init script that will throw
  debugger;
  exampleDebuggingProblem.init();
  console.log("Just called the library");
  debugger;
};

//Execute
app.init();

//Export the app
module.exports = app;
