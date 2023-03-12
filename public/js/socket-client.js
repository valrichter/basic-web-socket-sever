// Referencias del HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const socket = io();

socket.on("connect", () => {
  console.log("Connect");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Disconnect");
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});
