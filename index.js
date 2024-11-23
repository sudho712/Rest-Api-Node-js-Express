const express = require("express");
const users = require('./MOCK_DATA.json');

const app =express();
const PORT=3000;

// Routes

app.get("/users", (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));

