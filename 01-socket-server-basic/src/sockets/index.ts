import type { Server, Socket } from "socket.io";

export const configureSockets = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log(`🔌 Client connected: ${socket.id}`);

        socket.on("message", (data) => {
            console.log(`📩 Message received: ${data}`);
            io.emit("message", data); // broadcast to all
        });

        socket.on("disconnect", () => {
            console.log(`❌ Client disconnected: ${socket.id}`);
        });
    });
};
