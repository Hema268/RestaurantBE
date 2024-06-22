"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const restaurantRoute = require('src/routes/restaurant');
// Middleware to parse JSON bodies
app.use(express_1.default.json());
app.use('/restaurant', restaurantRoute);
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
