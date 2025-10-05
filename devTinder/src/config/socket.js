const socket = require("socket.io");
const generateRoomId = require("../utils/generateRoomId.js");
const Chat = require("../models/chat.js");

const initializeSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: process.env.ORIGIN,
    },
  });
  io.on("connection", (socket) => {
    socket.on("joinchat", ({ firstName, userId, toUserId }) => {
      const roomId = generateRoomId(userId, toUserId);

      //create room
      socket.join(roomId);
      console.log(firstName + " Joined room " + roomId);
    });
    socket.on(
      "sendmessage",
      async ({ firstName, userId, toUserId, text, photoUrl }) => {
        try {
          const roomId = generateRoomId(userId, toUserId);
          console.log(firstName + " " + text);

          // Save messages to Database
          let chat = await Chat.findOne({
            participants: {
              $all: [userId, toUserId],
            },
          });
          console.log("chasaadfsdf", chat);
          if (!chat) {
            chat = new Chat({
              participants: [userId, toUserId],
              messages: [],
            });
          }
          chat.messages.push({
            senderId: userId,
            text,
          });

          await chat.save();

          io.to(roomId).emit("messagereceived", {
            firstName,
            text,
            userId,
            toUserId,
            photoUrl,
          });
        } catch (error) {
          console.error("Something went wrong: ", error);
        }
      }
    );
    socket.on("disconnect", () => {});
  });
};

module.exports = initializeSocket;
