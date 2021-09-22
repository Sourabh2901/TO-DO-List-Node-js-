const Task          = require('../models/task');

module.exports.home = function(req,res){
    console.log("reached home route controller");
    Task.find({},function(err,Task){
        if(err){
            console.log("error while fetching task from DB");
            return;
        }
        return res.render('home',{
            title : 'TO-DO-APP',
            task_list  : Task
        });
    });
}

module.exports.addTask = function(req,res){
      console.log("reached addTask route controller");
    Task.create(req.body,function(err ,newTask){
        if(err){
            console.log("error while crating a new contact");
            return;
        }
        res.redirect('back');
        });
}


module.exports.deleteTask == function(req,res){
    console.log("reached delete route");
     //fetch the id of the element which need to be deleted
   let id = req.body.checkbox;

   let length = Object.keys(id).length;

   console.log(id, "length -> ", length);
   if(id.length == 24){
        Task.findByIdAndDelete(id,function(err){
            if(err){
                console.log("error in deleting object from DB");
                return;
            }
        });
   }else{
    for(let i = 0;i < id.length;i++){
        console.log("element with id deleted",id[i]);
        Task.findByIdAndDelete(id[i] ,function(err){
             if(err){
                 console.log("error in deleting object from db");
                 return;
             }
        });
    }
   }
   res.redirect('back');
}