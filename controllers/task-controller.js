const taskServices = require('../services/task-services');
// Register new Task in DB
let register = async (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    console.log(req.body);
 
    //     save data in database
    taskData = {
        name,
        description
    }
  
        try {
            let taskDbData = await taskServices.createTask(taskData);
            res.json({
                "message": "Successfully registered",
                "status": 200,
                "data": taskData
            })
        } catch (error) {
            console.log(error)
            res.json({
                "message": "Cannot registered successfully",
                "status": 400,
                "data": error
            })
        }
 
 
 }

//update particular task

let updateTask = async (req, res) => {
    let id=req.params.id;
    
    console.log(id);
        let  taskData=req.body;
    try {
        let taskDbData = await taskServices.updateTask(id,taskData);
        console.log("------",taskDbData);
        res.json({
            "message": "Successfully updated",
            "status": 200,
            "data": taskDbData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "Cannot updated details successfully",
            "status": 400,
            "data": error
        })
    }

}

//delete particular task

let deleteTask = async (req, res) => {
    let id=req.params.id;
    
    console.log(id);

    try {
        let taskDbData = await taskServices.deleteTask(id);
        console.log("------",taskDbData);
        res.json({
            "message": "Successfully deleted",
            "status": 200,
            "data": taskDbData
        })
    } catch (error) {
        console.log("error",error)
        res.json({
            "message": "Cannot deleted details successfully",
            "status": 400,
            "data": error
        })
    }

}


// fetch all tasks
 let fetchAllTasks=async(req,res)=>{
    try {
    
        let taskList = await taskServices.getAllTaskList()
        console.log(taskList)
       res.send(taskList)
       
      
    } catch (error) {
        console.log(error)
       res.json({
           "message": "Error during fetching data",
           "status": 400,
           "data": error
       })
    }
}


//get all uncompleted tasks

let fetchAllUncompleted = async (req, res) => {
    let projection = "uncomplete"
    try {
        let taskDbData = await taskServices.getUncompeleted(projection)
        res.send(taskDbData)

    } catch (error) {
        console.log(error)
        res.json({
            "message": "Error during fetching data",
            "status": 400,
            "data": error
        })
    }
}

//mark uncomplete task
let markTask = async (req, res) => {
    let id = req.params.id;
    let status = "completed";
    currentDate=Date.now()
    console.log(currentDate)
    try {
        let taskDbData = await taskServices.markCompleteTask(id, status,currentDate);
        res.json({
            "message": "task completed successfully",
            "status": 200,
            "data": taskDbData
        })
    } catch (error) {
        console.log(error)
        res.json({
            "message": "task cannot be completed",
            "status": 400,
            "data": error
        })
    }

}


module.exports = {
   register,
   fetchAllTasks,
   updateTask,
   deleteTask,
   markTask,
   fetchAllUncompleted
   
}