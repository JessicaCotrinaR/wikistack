const express = require("express");
const morgan = require("morgan");

const wiki = require("./routes/wiki");
const users = require("./routes/users");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
  extended: false
}))

app.use('/wiki', wiki)

const { db } = require('./models');

//app.get("/", (req, res) => {
 // console.log('hello world!');
//})

db.authenticate().then(() => {
  console.log('Connected to the database!');
})

const PORT = 1338;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
