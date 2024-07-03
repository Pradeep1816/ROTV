
const express= require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');

// create database porject into mongoDb  and connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/project');
  console.log("db connected");
}

//create user schema for geting data from the frontend
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,

  });
  const Users = mongoose.model('Users',userSchema);
  

const server=express();
server.use(cors());
server.use(bodyParser.json());

//post method for users Registations

server.post('/Users',async(req,res)=>{
  let users=new Users();
  const match=await Users.findOne({email:req.body.email});
  if(match){
   res.json("exist");
  }else{
  users.username=req.body.username;
  users.email=req.body.email;
  users.password=req.body.password;
  users.save();
  res.json("success");

  
  }
})
// get users from database and send to frontend
server.get('/project',async(req,res)=>{
  const docs= await Users.find({});
    res.json(docs);
})


//passenger Schema for geting data from fontend
const passengerSchema = new mongoose.Schema({
  firstName:String,
  LastName:String,
  Age:String,
  AdharNumber:String,
  PhoneNumber:String,
  TrainNumber:String,
  CoachNumber:String,
  Classes:String,
  PnrNumber:String,
  status:String

});

//creating model form userSchema
const Passengers = mongoose.model('Passengers',passengerSchema);

//passenger data to store into database
 let s="In Process";
server.post('/Passengers',(req,res)=>{
 let passengers=new Passengers();
   passengers.firstName=req.body.firstName;
   passengers.LastName=req.body.LastName;
   passengers.Age=req.body.Age;
   passengers.AdharNumber=req.body.AdharNumber;
   passengers.PhoneNumber=req.body.PhoneNumber;
   passengers.TrainNumber=req.body.TrainNumber;
   passengers.CoachNumber=req.body.CoachNumber;
   passengers.Classes=req.body.Classes;
   passengers.PnrNumber=req.body.PnrNumber;
   passengers.status=s;
   passengers.save();
  //  console.log(req.body);
    res.json("success");
})
 

const searchSchema = new mongoose.Schema({
  firstName:String,
  LastName:String,
  Age:String,
  AdharNumber:String,
  PhoneNumber:String,
  TrainNumber:String,
  CoachNumber:String,
  Classes:String,
  PnrNumber:String,
  status:String
});

const SearchData = mongoose.model('SearchData',searchSchema);


const Idschema = new mongoose.Schema({
  firstName:String,
  LastName:String,
  Age:String,
  AdharNumber:String,
  PhoneNumber:String,
  TrainNumber:String,
  CoachNumber:String,
  Classes:String,
  PnrNumber:String,
  status:String
});


const VerifiedPassenges = mongoose.model('VerifiedPassenges',Idschema);


server.post("/VerifiedPassenges", async(req,res)=>{
  const id=req.body.idd;
  let verifiedData=new VerifiedPassenges();
      const pas=await Passengers.findByIdAndUpdate({_id:id},{
        $set:{
         status:"verified"
        }
     });
     res.json("Verification sucessfull")
     let pass=await Passengers.findOne({_id:id});
     
    verifiedData.firstName=pass.firstName,
    verifiedData.LastName=pass.LastName,
    verifiedData.Age=pass.Age,
    verifiedData.AdharNumber=pass.AdharNumber,
    verifiedData.PhoneNumber=pass.PhoneNumber,
    verifiedData.TrainNumber=pass.TrainNumber,
    verifiedData.CoachNumber=pass.firstName,
    verifiedData.Classes=pass.Classes,
    verifiedData.PnrNumber=pass.PnrNumber,
    verifiedData.status=pass.status,
    verifiedData.save();
  
     //Storing data for searching purpose

    let searchdata=new SearchData();
    searchdata.firstName=pass.firstName,
    searchdata.LastName=pass.LastName,
    searchdata.Age=pass.Age,
    searchdata.AdharNumber=pass.AdharNumber,
    searchdata.PhoneNumber=pass.PhoneNumber,
    searchdata.TrainNumber=pass.TrainNumber,
    searchdata.CoachNumber=pass.CoachNumber,
    searchdata.Classes=pass.Classes,
    searchdata.PnrNumber=pass.PnrNumber,
    searchdata.status=pass.status
    searchdata.save();

  

    console.log(pass)
})



server.post('/SearchData',async(req,res)=>{
   const p=req.body.pnr;
  const filter=await SearchData.find({PnrNumber:p});
   res.json(filter)
})

server.get('/Users',async(req,res)=>{

  const userdata=await Users.find({})
  res.json(userdata)

})

server.get('/Passengers',async(req,res)=>{
  const docs= await Passengers.find({});
    res.json(docs);
})






server.listen(8080,()=>{
    console.log("server started");
})