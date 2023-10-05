var express = require('express')
 
const SERVER_PORT = 8088
var app = express()

app.use("/test", express.static( "./public"))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))

app.get("/index",(req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

//http://localhost:8088/emp?fnm=stefan&lnm=kepinski
//query parameter
app.get("/user", (req, res) => {
    res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})

//http://localhost:8088/student/stefan/kepinski
//Path Parameter
app.post("/user/:fname/:lname", (req, res) => {
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})