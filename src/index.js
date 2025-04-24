const express = require('express');
const { sequelize, connectDB } = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Databasae connection
connectDB();

// App routes
app.use(require('./routes/index'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});