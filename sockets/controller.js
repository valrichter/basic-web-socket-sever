const socketController = (socket) => {
  console.log("Client disconnected", socket.id);

  socket.on("disconnect", () => {
    console.log("Desconection client", socket.id);
  });

  socket.on("send-message", (payload, callback) => {
    const id = 123456789;
    callback(id);
    socket.broadcast.emit("send-message", payload);
  });
};

export default {
  socketController,
};
