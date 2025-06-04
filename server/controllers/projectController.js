import Project from "../models/project.js";
// READ ALL PROJECT
export const getAllprojects = async (req, res) =>{
    try{
        const projects = await Project.find() // db.projects.find() if using mongo shell
        res.status(200).json(projects);// 200 HTTP status code for success
    }catch(error){
        req.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};
//create new project
export const createProject = async(req,res) => {
    try{
        const project = new Project.find(req.body);
        await project.save();
        res.status(201).json(project); 
    }catch(error){
        res.status(501).json({message: error.message});
    }
} ;