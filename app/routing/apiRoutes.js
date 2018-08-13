var express=require("express");
var router=express.Router();
var friends=require("./../data/friends.js");
//console.log(require.resolve("./../data/friends.js"));//used this to test resolve function
router.get("/api/friends",function(req,res){
    //console.log(friends);
    res.json(friends);
});
router.post("/api/friends",function(req,res){
    console.log(req.body);
    var best={location:0,score:99999999999999999};
    for(var i=0;i<friends.length;i++){
        var friend=friends[i].scores;
        var me=req.body.scores;
        var score=0;
        for(var j=0;j<10;j++){
            score+=Math.abs(friend[j]-me[j]);
        }
        if(score<best.score){
            best.location=i;
            best.score=score;
        }
    }
    friends.push(req.body);
    res.json(friends[best.location]);
})
module.exports=router;