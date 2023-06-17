/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((employee) => {
        if(employee.profession === 'developer'){
            console.log(employee)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
        if(employee.profession === 'developer'){
            console.log(employee)
        }
    })
  }
  
  function addData() {
    const newEmployee ={id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(newEmployee);
    console.log(newEmployee)
  }
  
  function removeAdmin() {
    let admin;
    const otherEmployees = arr.filter((employee) =>{
        if(employee.profession ==='admin'){
            admin = employee ;
            return false ;
        }
        return true;
    }
  }
  
  function concatenateArray() {
    let newArr = [
        { id: 10, name: "Rohan", age: "22", profession: "manager" },
        { id: 22, name: "jack", age: "21", profession: "sales" },
        { id: 33, name: "karen", age: "4", profession: "product manager" },
      ]
      const concantArray = []
       arr.forEach((emp) => {
        concatArray.push(emp)
       })
       newArr.forEach((emp) => {
        concatArray.push(emp);
       })
       console.log(concatArray)
  }