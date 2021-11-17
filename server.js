console.log("up and running");

let express = require("express"); //dichiarare libreria

let app = express(); //attivare libreria

let port = 3000; //definire la port che si vuole usare

let server = app.listen(port);

console.log("server is running on http://localhost:" + port);

app.use(express.static("public"));

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);

  newSocket.on("mouse", mouseMessage);

  function mouseMessage(dataReceived) {
    console.log(dataReceived);

    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
  }
}
