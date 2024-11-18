"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users = [];
router.get("/users", (req, res) => {
    res.status(201).json(users);
});
router.get('/echo/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});
router.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
router.post('/sum', (req, res) => {
    const { numbers } = req.body;
    if (Array.isArray(numbers)) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        res.json({ sum });
    }
    else {
        res.status(400).json({ error: 'numbers must be an array' });
    }
});
router.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ error: "Name and email are required" });
    }
    users.push({ name, email });
    res.json({ message: "User successfully added" });
});
exports.default = router;
