const
    express = require("express"),
    path    = require("path"),
    route   = require("./routes/index"),
    app     = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', route);

app.listen(8080, () => {
    console.log("Express App on port 8080");
})
