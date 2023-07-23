const express = require('express')


const mongoDB = require("./db")
const path = require('path')

const app = express()



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


app.use(express.json())
app.use(express.static(path.join(__dirname,"./client/build")));

app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));



app.use('*',function (req, res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const port = process.env.port || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})