var express = require('express')

var routes = express.Router()

routes.get("/", (req, res) => {
    res.send("<h1>Studend - GET - / </h1>")
})

//localhost:8088/student/
routes.route("/fulltime")
    .get((req, res) => {
        res.send("<h1>Full Time Student - GET - /fulltime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Full Time Student - POST - /fulltime </h1>")
    })
    .put((req, res) => {
        res.send("<h1>Full Time Student - PUT - /fulltime </h1>")
    })

routes.route("/parttime")
    .get((req, res) => {
        res.send("<h1>Part Time Student - GET - /parttime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Part Time Student - POST - /parttime </h1>")
    })

    module.exports = routes