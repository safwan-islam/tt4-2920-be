const path = require("path");
const http = require("http");
const dotenv = require("dotenv");

// dotenv.config({path: path.resolve(__dirname, "../.env")})
dotenv.config();

const { connectDB } = require("./config/db");
const app = require("./app");
const { initializeSocket } = require("./socket");


const PORT = process.env.PORT || 5000;

const startSer
    try{
        await connectDB();

        const server = http.createServer(app);
        initializeSocket(server)

        server.listen(PORT, ()=>{
            console.log("Server is running...");
        });
    } catch(error){
        console.log("Failed to start server: ", error);
        process.exit(1);
    }
};

startServer();