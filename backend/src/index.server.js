const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require("./routes/admin/auth");
const userRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster1.gpclwgk.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Database connected");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));    
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', userRoutes);
app.get('/', (req, res,next)=>{
    res.status(200).json({
        message:'Hello from Server'
    });
});

app.post('/data', (req, res,next)=>{
    res.status(200).json({
        message:req.body
    });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});
