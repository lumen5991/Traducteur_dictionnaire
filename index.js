var server = require('./server');


server.listen(8002, function () {
  console.log("Server is running at 8002");
});


/* 
const server = require("express");


server.listen(8002, function (){
  console.log(`Server is running at 8002`);
});
 */