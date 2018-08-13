var express=require("express");
var bodyParser=require("body-parser");
var PORT=process.env.PORT||3000;
var app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var htmlRoutes=require("./app/routing/htmlRoutes");
var apiRoutes=require("./app/routing/apiRoutes");
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT,function(){
    console.log("Server listening on port: "+PORT);
})