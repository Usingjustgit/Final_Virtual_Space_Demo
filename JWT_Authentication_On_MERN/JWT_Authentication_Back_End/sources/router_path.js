const express = require("express");
const rourter = express.Router();
const user_table = require("./user_table");

// import the password incoder dependecis
const bcrypt = require("bcryptjs");

// import the jsonwebtoken generated dependences
const jwt = require("jsonwebtoken");
const { decrypt } = require("dotenv");
const authentication = require("./authentication");






// ====================================================
// *********Here to Start The All Get Methods*********
// ====================================================



// Fist page when i creating the server side router path 
rourter.get("/index",(req,res) => {
    res.send("This is Router Index page.");
});

// With the help of this rourter path we easily get all the user information  .
rourter.get('/fetch/all/data',async(req,res) => {
    const allClients = await user_table.find();
    res.status(200).json({message:allClients});
});


// With the help of this rourter path we easily get client About section. 
rourter.get('/about',authentication,async (req,res) => {
    res.send(200).json({message:"Access success"});
});









// ====================================================
// *********Here to Start The All Post Methods*********
// ====================================================


// client registration router path, Here Client register easily
rourter.post('/client/registration',async (req,res) => {
    
    const {name,email,mobile_no,password} = req.body;

    if(!name || !email || !mobile_no || !password){
        return res.status(428).json({message:"Precondition is required."});
    }
    

    try{

        const userExitst = await user_table.findOne({email:email});
        if(userExitst){
            return res.status(409).json({message:'email address alrady exist.'});
        }

        const client = new user_table({name,email,mobile_no,password});

        const ragisted = await client.save();

        if(ragisted){
            res.status(200).json({message:"registration successfull."});
        }

    }catch(error){
        res.status(500).json({message:"Internal sever error.",error});
    }

});


// client login process router path,Here Client Singup easily 
rourter.post("/client/login",async (req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(409).json({message:"Please fill the required fild."});
    }

    try{

        const userExitst = await user_table.findOne({email:email});

        if(!userExitst){
            return res.status(404).json({message:"email address is not exist."});
        }

        // Client password is decrypt
        const password_Match = await bcrypt.compare(password,userExitst.password);

        if(!password_Match){
            return res.status(404).json({message:"password is not match."});
        }

        // Client Token is generated
        const temparory_token = await userExitst.generateAuthToken();
        await user_table.updateOne({_id:userExitst._id},{$set:{"token":temparory_token}});
       
        
        // Generat cookis on the server side and browser side
        res.cookie("MERN_IMP_DATA",temparory_token,{
            expires: new Date(Date.now()+(60*1000)),
            httpOnly:true
        });

        return res.status(200).json({message:"login success"});

    }catch(error){
        res.status(500).json({message:"Internal server error."});
    }
});


// =====================================================
// *********** Uploding File and Documents *************
// =====================================================

// This is for Uploded file store in the disc storage 
const multer = require("multer");
rourter.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./uploded_files");
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({storage});




rourter.post("/upload/file",upload.single("file"),async (req,res) => {

    try{
        
        const current_client = await user_table.findOne({name:"Gopal"});

        // await current_client.save_files_array(req.file.filename);

        await user_table.updateOne({_id:current_client._id},{$set:{"files.file":req.file.filename}});

        return res.status(200).json({message:`File uploaded success full.Filename is : ${req.file.originalname}`});

        

    }catch(error){
        return res.status(500).json({message:"Internal server error.",error});
    }
    
});



module.exports = rourter;