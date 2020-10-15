const express=require('express');
const validate=require('../validators/task-validator')
const router=express.Router();
const taskController=require('../controllers/task-controller')
router.get('/',(req,res)=>{
res.send("task home page");
});
router.post('/register',validate.registerValidation,taskController.register);
router.get('/uncompleteTasks',taskController.fetchAllUncompleted);
router.get('/alltasks',taskController.fetchAllTasks); 
router.put('/updateTask/:id',validate.updateValidation,taskController.updateTask);
router.put('/completeTask/:id',taskController.markTask)
router.delete('/deleteTask/:id',taskController.deleteTask);

module.exports=router;