const express = require('express');
const app = express();
const cors = require('cors')
require("./config/mongoose.config");
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyRoutes = require("./routes/admin.routes");
AllMyRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));