var express = require('express')

var routes = express.Router()

routes.get("/", (req, res) => {
    res.send("<h1>Faculty - GET - / </h1>")
})

//localhost:8088/faculty/
routes.route("/fulltime")
    .get((req, res) => {
        res.send("<h1>Full Time Faculty - GET - /fulltime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Full Time Faculty - POST - /fulltime </h1>")
    })
    .put((req, res) => {
        res.send("<h1>Full Time Faculty - PUT - /fulltime </h1>")
    })

routes.route("/parttime")
    .get((req, res) => {
        res.send("<h1>Part Time Faculty - GET - /parttime </h1>")
    })
    .post((req, res) => {
        res.send("<h1>Part Time Faculty - POST - /parttime </h1>")
    })

    module.exports = routes