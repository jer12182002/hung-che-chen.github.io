const express =require('express');


//set up express app
const app =express();
const path=require("path");

app.use(express.static("./"));
app.get('/',function(req,res){
   // res.sendFile('myPage.html',{root:path.join(__dirname,'./')});
   res.sendFile(path.join(__dirname+'/myPage.html'));

});

//listen for requests
 app.listen(process.env.port||4000,function(){
 console.log("=========Now listening=======");
 });

