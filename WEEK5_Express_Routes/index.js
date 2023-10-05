var express = require('express')
var studentRoutes = require('./routes/Student')
var facultyRoutes = require('./routes/Faculty')

const SERVER_PORT = 8088
var app = express()

var v1api = express()

//Application level middleware
app.use((req, res, next) => {
    console.log(`Application Middleware: ${req.method} - ${req.url}`)
    next()
})

//Route level middleware
app.use("/api/v1/student",(req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
})

app.use("/hello", (req, res, next) => {
    try {
        throw new Error("Error thrown")
    } catch (err) {
        next(err)
    }
})

//Error Handling level middleware
var errorHandling = (err, req, res, next) => {
    console.log("Middleware Error Handling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

app.use(errorHandling)

v1api.use('/student', studentRoutes)
v1api.use('/faculty', facultyRoutes)
app.use("/api/v1", v1api)
//http://localhost:8088/api/v1/student/parttime

//http://localhost:8088/
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express Apps</h1>")
})

app.get("/hello", (req, res) => {
    
})

app.post("/welcome", (req, res) => {
    
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
//http://localhost:8088/