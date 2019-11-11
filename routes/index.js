const
    express = require("express"),
    route   = express.Router();

route.get('/', (req, res) => {
    res.render("index");
});

route.get('/test', (req, res) => {
    res.render("test");
})

module.exports = route;



