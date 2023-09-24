var http =  require("http")
//console.log(http)

const SERVER_PORT = 8088

var server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/"){
        res.write("<h1> Welcome to the Node Server</h1>")
    }

    if(req.url == "/student"){
        const stud = {
            sid: 1,
            snm: "Stefan"
        }
        res.write("<h1>Student Page</h1>")
        res.write(JSON.stringify(stud))
    }

    if(req.url == "/login"){
        res.write("<h1> Login Page</h1>")
    }


    res.end()
})

server.listen(SERVER_PORT)
console.log(`Server running at ${SERVER_PORT}`)