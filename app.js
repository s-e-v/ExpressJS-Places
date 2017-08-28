var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("landing page init");
});

app.listen(5000,localhost,function(){
    console.log("server started");
});