var express = require('express')
 
const SERVER_PORT = 8088
var app = express()

//Static middleware
app.use("/test", express.static( "./public"))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

app.get("/index",(req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

//http://localhost:8088/index
// app.get("/", (req, res) => {
//     res.status(200).send("<h1>Welcome to Express Server</h1>")
//     res.send("<h1>Welcome to Express Server</h1>")
//     //res.end()
// })

app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Stefan Kepinski",
        city: "Toronto"
    }

    res.send(JSON.stringify(p))
})

app.post("/person", (req, res) => {
    const p = {
        pid: 1,
        pnm: "Stefan Kepinski"
    }

    res.json(p)
})

//http://localhost:8088/student/stefan/kepinski
//Path Parameter

app.get("/student/:fname/:lname", (req, res) => {
    // res.json(req.params)
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
}) 

//http://localhost:8088/emp?fnm=stefan&lnm=kepinski
//query parameter
app.get("/emp", (req, res) => {
    res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})

app.post("/faculty", (req, res) => {
    let data = req.body
    console.log(data)
    
    res.send(data)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
