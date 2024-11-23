const express = require("express");

const app =express();
const PORT=3000;

// Routes
app.listen(PORT, () => console.log('server started at PORT:${PORT}'));

