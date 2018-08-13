var express=require("express");
var router=express.Router();
var friends=require("../data/friends");
router.get("/api/friends",function(req,res){
    res.json(friends);
});
router.post("/api/friends",function(req,res){
    console.log(req.body.data);
    var best={location:0,score:99999999999999999};
    for(var i=0;i<friends.length;i++){
        var friend=friends[i].scores;
        var me=req.body.data.scores;
        var score=0;
        for(var j=0;j<10;j++){
            score+=Math.abs(friend[j]-me[j]);
        }
        if(score<best.score){
            best.location=i;
            best.score=score;
        }
    }
    friends.push(req.body.data);
    res.json(friends[best.location]);
})
module.exports=router;