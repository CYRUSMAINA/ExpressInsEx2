import User from "../models/user.js";
// READ ALL PROJECT
export const getAllprojects = async (req, res) =>{
    try{
        const users = await User.find() // db.projects.find() if using mongo shell
        res.status(200).json(users);// 200 HTTP status code for success
    }catch(error){
        req.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};
//create new project
export const createUser = async(req,res) => {
    try{
        const user = new User.find(req.body);
        user.update = new Date(); // setup an updated time 
        await user.save();
        res.status(201).json(user); 
    }catch(error){
        res.status(400).json({message: error.message});
    }
} ;