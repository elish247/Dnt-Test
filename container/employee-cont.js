const EmployeeModel=require("../model/employee-model")

//add employee details

module.exports.addEmployee=function(req,res){
        let empName=req.body.empName
        let empDesignation=req.body.empDesignation
        let empDepartment=req.body.empDepartment
        let joiningDate=req.body.joiningDate



        let dntEmployee=new EmployeeModel({
            empName:empName,
            empDesignation:empDesignation,
            empDepartment:empDepartment,
            joiningDate:joiningDate
        })

        dntEmployee.save(function (err, data) {
            if (err) {
                res.json({ msg: "Something went wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
            } else {
                res.json({ msg: "Employee details added", data: data, status: 200 })//http status code 
            }
        })
    
        


}

// list all the employees
// 1 is used for ascending sorting and -1 for descending
// find({"joiningDate": 1})
// ascending order
module.exports.getEmployeeDetails = function (req, res) {

    EmployeeModel.find({}).exec(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "here is the data", data: data, status: 200 })//http status code 
        }
    })
    
}

// delete employee

function deleteEmployee(req,res,next){
    EmployeeModel.findByIdAndDelete(req.params.id, (err,emp)=>{
      if(err){
        return res.status(500).send({error: "Problem with Deleting the Employee recored "})
      }
      res.send({success: 'Employee deleted successfully'})
    })
  }
  module.exports.deleteEmployee = deleteEmployee;


// update Employee details

function updateEmployee(req,res,next){
    EmployeeModel.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
      if (err) {
        return res.status(500).send({error: "Problem with Updating the   Employee recored "})
      };
      res.send({success: "Updation successfull"});
    })
  }
  module.exports.updateEmployee = updateEmployee;






  