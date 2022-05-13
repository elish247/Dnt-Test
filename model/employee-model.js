const mongoose=require("mongoose")

const EmployeeSchema= new mongoose.Schema({
    empName:{
        type:String,
        required:true
        
        
    },
    empDesignation:{
        type:String,
        required:true
       
    },
    empDepartment:{
        type:String,
        required:true
        
    },
    joiningDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});

const EmployeeModel= mongoose.model("DNTemployees",EmployeeSchema)

module.exports=EmployeeModel