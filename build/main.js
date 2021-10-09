"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
// Boot express
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
// compress all responses
app.use((0, compression_1.default)());
// cors policy
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Application routing
app.use('/', function (req, res) {
    res.status(200).send({ data: 'Hello vietokok' });
});
// Start server
app.listen(5000, function () { return console.log("Server is listening on port 5000!"); });
//# sourceMappingURL=main.js.map