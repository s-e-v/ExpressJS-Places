var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/places",function(req,res) {
    var places = [
        {name: "Place 1",pic:"https://www.nycgo.com/images/uploads/homepage/Empire-State-Building-Observatory-Tom-Perry-2618.jpg"},
        {name: "Place 2",pic:"http://www.planetware.com/photos-large/MEX/mexico-top-places-cancun-mayan-riviera.jpg"},
        {name: "Place 3",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJfieLGZSTAoOuXj-NOO11cxYOiaqopm_y3vmSbVeduPXoHpEkQ"}
    ];
    res.render("places",{places:places});
});

app.post("/places",function(req,res){
    // get data from from form and redirect

});

app.listen(5000,function(){
    console.log("server started");
});