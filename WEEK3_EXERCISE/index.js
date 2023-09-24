const http = require('http');
const Employee = require("./Employee");

console.log("Lab 03 -  NodeJs");

const port = process.env.PORT || 8088

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            content = true
        }

        if (req.url === '/employee') {
            const employees = Employee.getAllEmployees()
            res.write(JSON.stringify(employees))
            content = true
        }

        if (req.url === '/employee/names') {
            const employeeNames = Employee.getEmployeeNames()
            res.write(JSON.stringify(employeeNames))
            content = true
        }

        if (req.url === '/employee/totalsalary') {
            const totalSalary = Employee.getTotalSalary()
            res.write(JSON.stringify(totalSalary))
            content = true
    }
    if (!content) {
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    } else {
        res.end();
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})