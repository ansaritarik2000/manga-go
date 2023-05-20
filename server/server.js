var express = require('express')
var fs = require('fs');
const cors = require("cors");
const bodyParser = require('body-parser'); 
var app = express()
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
var fs = require('fs');

app.listen(8080,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("server started 8080");

})


app.post("/register",(req,res)=>{
    let result=fs.appendFileSync('./data/userdata.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/userdata.json', "\n","utf8")
    let resultdata=""
    if(!result){
        resultdata={success:true,message:"Register successfully"}
    }
    else{
        resultdata={success:false,message:"Register not  successfully"}
        
    }
    res.send(resultdata)
})
app.post('/login',function(req,res){
    let data=fs.readFileSync('./data/userdata.json',"utf8")
    let adddata=[]
    data.split('\n').forEach(d=>{
        adddata.push(d)
    })
    let add1=[]
    adddata.map(d=>{
        if(d!=="")
        add1.push(JSON.parse(d))
    })
    
    let resultlog="";
    add1.map(d=>{
        if(d.username===req.body.email ||d.email===req.body.email && d.password===req.body.password  ){
            resultlog={success:true,message:"user login successfully",data:d}
        }
    })
    if(resultlog){
        res.send(resultlog)
    }
    else{
        res.send({success:false,message:"user not login successfully"})
    }
   
 })

 app.post("/download",(req,res)=>{
    let result=fs.appendFileSync('./data/userdownload.json', JSON.stringify(req.body),"utf8")
    fs.appendFileSync('./data/userdownload.json', "\n","utf8")
    let resultdata=""
    if(!result){
        resultdata={success:true,message:"Register successfully"}
    }
    else{
        resultdata={success:false,message:"Register not  successfully"}
        
    }
    res.send(resultdata)
})