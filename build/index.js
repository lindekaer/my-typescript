"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server = require("./server");
const dotenv = require("dotenv");
const PORT = parseInt(process.env.PORT) || 9000;
const MODE = process.env.NODE_ENV || 'development';
if (MODE === 'development') {
    dotenv.load();
}
server.start(PORT, MODE);
//# sourceMappingURL=index.js.map