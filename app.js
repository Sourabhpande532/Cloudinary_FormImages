const express = require("express");
const app = express();

app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/myapp", (req, res) => {
  console.log(req.body); //usually come info via Framwork like react..
  res.send(req.query); //ejs pass info usually in query
});
/* @IDENTIFIRE:😇 ↖️*/

app.get("/getform", (req, res) => {
  res.render("getform");
});

app.get("/postform", (req, res) => {
  res.render("postform");
});

/*
 @IDENTIFIRE👉👉TITLE: TEMPLATE ENGINE🔝🔝
*/


const PORT = 5000;
app.listen(PORT, () =>
  console.log(`The server is on http://localhost:${PORT}/postform`)
);
