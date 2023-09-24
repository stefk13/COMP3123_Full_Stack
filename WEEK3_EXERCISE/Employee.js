
class Employee{
    constructor(id,firstName,lastName,email,Salary){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.salary = Salary
    }

    print(){
        console.log(this.id)
        console.log(this.firstName)
        console.log(this.lastName)
        console.log(this.email)
        console.log(this.salary)
    }

}

module.exports = Employee

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

Employee.getAllEmployees = () => {
    return employees;
};

Employee.getEmployeeNames = () => {
    return employees.map(employee => `${employee.firstName} ${employee.lastName}`).sort();
};

Employee.getTotalSalary = () => {
    let total = 0;
    employees.forEach((employee) => {
        total += employee.Salary;
    });
    return `Total Salary: $${total}`;
};