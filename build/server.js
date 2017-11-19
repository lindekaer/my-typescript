"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userService = require("./services/user");
function start(port, mode) {
    const app = express();
    app.post('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const user = yield userService.create(req.body);
        res.json(user);
    }));
    app.listen(port, () => console.log(`[${mode}] App running on port ${port}`));
}
exports.start = start;
//# sourceMappingURL=server.js.map