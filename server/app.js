const express = require('express');
const  cookieParser = require('cookie-parser')
const cors = require('cors')

const bodyParser = require("body-parser");
// const userRoutes = require('./routes/userRoute');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require("./routes/admin/productRoutes");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin:'http://localhost:5173',
  credentials:true
}

app.use(cors(corsOptions));

app.use('/api', userRoutes);
app.use('/api', productRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
