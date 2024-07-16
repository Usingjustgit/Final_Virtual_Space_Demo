const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({path:"../config.env"});

const table_schema = require("./user_table");

const authentication = async (req,res,next) => {

    try{

        const front_token = req.cookie.MERN_IMP_DATA;

        console.log(front_token);

        const verifyToken = await jwt.verify(front_token, process.env.SECRET_KEY);

        console.log(verifyToken);

        const token_owner = await table_schema.findOne({_id:verifyToken._id,"Tokens:token":front_token});

        console.log(token_owner);
        
        req.token = front_token;
        req.Client =  token_owner;
        req.id = token_owner._id;

        next();
    }catch(error){
        console.log(error);
    }
}

module.exports = authentication;