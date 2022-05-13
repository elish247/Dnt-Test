const express=require("express")

const app= express()

const mongoose=require("mongoose")

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const employeecontroller=require("./container/employee-cont")

// add employees url
app.post("/addEmployee",employeecontroller.addEmployee)

// list employee url
app.get("/getDetails",employeecontroller.getEmployeeDetails)

// delete employee url
app.delete("/deleteEmployee",employeecontroller.deleteEmployee)

// update empployee
app.patch("/updateEmployee",employeecontroller.updateEmployee)
mongoose.connect('mongodb://localhost:27017/DNT',function(err){
  if(err){
    console.log("db connection fail..");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

app.listen(1000,function(){
    console.log("server started on 1000");  
  }) 