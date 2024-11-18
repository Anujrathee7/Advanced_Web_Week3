"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
app.post('/sum', (req, res) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        res.json({ sum });
    }
    else {
        res.status(400).json({ error: 'numbers must be an array' });
    }
});
const users = [];
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.json({ message: "User successfully added" });
});
app.get('/users', (req, res) => {
    res.status(201).json(users);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
