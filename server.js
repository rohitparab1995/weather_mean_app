const app = require("./backend/app");
const http = require("http");

const port = 8000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
