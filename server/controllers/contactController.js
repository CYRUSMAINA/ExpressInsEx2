import Contact from "../models/contact.js";
// READ ALL PROJECT
export const getAllprojects = async (req, res) =>{
    try{
        const contacts = await Contact.find() // db.projects.find() if using mongo shell
        res.status(200).json(contacts);// 200 HTTP status code for success
    }catch(error){
        req.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};
//create new project
export const createContact = async(req,res) => {
    try{
        const contact = new User.find(req.body); 
        await contact.save();
        res.status(201).json(contact); 
    }catch(error){
        res.status(400).json({message: error.message});
    }
} ;