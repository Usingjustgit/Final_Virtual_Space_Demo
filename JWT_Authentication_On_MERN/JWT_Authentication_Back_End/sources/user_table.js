const mongoose = require("mongoose");

// Fetch url on the config file
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});
const rendom_number = process.env.RENDOM_NUMBER;

// import the password incoder dependeces
const bcrypt = require("bcryptjs");

// import the jsonwebtoken generated dependences
const jwt = require("jsonwebtoken");

// structured of the teble and defined all field requirements
const table_schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    // files:[
    //     {
    //         file:{
    //             type: String
    //         }
    //     }
    // ],
    file:{
        type: String
    },
    mobile_no:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String
    }
    // Tokens:[
    //     {
    //         token:{
    //             type: String
    //         }
    //     }
    // ]
});



// Given any password encrypt by using bcrypt password incoder with the help of middelwer
table_schema.pre('save',async function(next){
   
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 11);
    }
    next();

});

// Here Generated the temperory token from the clien 
table_schema.methods.generateAuthToken = async function(){
    
    try{

        let generat_token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);

        // this.Tokens = this.Tokens.concat({token:generat_token});

        // await this.save();

        return generat_token;

    }catch(error){
        console.lon(error);
    }
}


// table_schema.methods.save_files_array = async function(filename){
//     try{

//         this.files = this.files.concat({file:filename});
//         await this.save();

//     }catch(error){
//         console.log(error);
//     }
// }



// Define model on the mongoDB databes
const desc_table = mongoose.model("MERN_DATA",table_schema);

// table is export on the whole projects
module.exports = desc_table;