const express = require("express");
const logger = require("./middleware/logger");
const studentRoute = require("./routes/studentRoute");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/students", studentRoute);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});