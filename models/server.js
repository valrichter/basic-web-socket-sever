const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.paths = {};

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();

    // Sockets
    this.sockets();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    //this.app.use(this.paths.auth, require("../routes/auth"));
  }

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("Connection client", socket.id);
      socket.on("disconnect", () => {
        console.log("Desconection client", socket.id);
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

module.exports = Server;
