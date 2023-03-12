// Referencias del HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const socket = io();

socket.on("connect", () => {
  lblOnline.style.display = "";
  lblOffline.style.display = "none";
});

socket.on("disconnect", () => {
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});

socket.on("send-message", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "1234",
    date: new Date().getTime(),
  };
  socket.emit("send-message", payload);
});
