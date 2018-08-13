var express=require("express");
var router=express.Router();
router.get("/survey",function(req,res){
    res.sendFile(".../public/survey.html");
})
router.get("*",function(req,res){
    res.sendFile("../public/home.html");
})
module.exports=router;