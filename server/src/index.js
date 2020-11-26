require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");
const instances = require("./routes/instances");

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DEconstE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // set header to return token if it is about to expiry 
  res.setHeader('Access-Control-Expose-Headers', '*'); 


  // Pass to next layer of middleware
  next();
});
auth(app);



instances(app);

app.listen(8080, () => {
  console.log("Server up and running at localhost:8080");
});
