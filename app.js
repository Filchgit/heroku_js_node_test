const express = require("express");
const https = require("https");
const { dirname } = require("path");

const app = express();

app.use(express.static(__dirname + "/public"));
/* app.use(bodyParser.urlencoded({extended:true}));    ---again deprecated use following line instead */
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html" );
});

app.listen(process.env.PORT ||3000,function(){
  console.log("Server is running on port 3000, if running locally")
});
