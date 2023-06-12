const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

// API cloudinary
cloudinary.config({
  // cloud_name: process.env.CLOUD_NAME
  cloud_name: "djqf9vhkq",
  api_key: "333799583579346",
  api_secret: "NQvSauVhU6fjJ5Wrd_GDqMHTVu4",
});

app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/*GETFORM REQUEST*/
app.get("/myapp", (req, res) => {
  console.log(req.body); //usually come info via Framwork like react..
  res.send(req.query); //ejs pass info usually in query
});
/* @IDENTIFIRE:😇 ↖️*/

/*POSTFORM REQUEST*/
app.post("/mypost", async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  /*CASE -PASS MULTIPLES IMAGES */
  let result;
  let imageArray = [];
  
  if (req.files) {
    for (let index = 0; index < req.files.samplefile.length; index++) {
      result = await cloudinary.uploader.upload(
        req.files.samplefile[index].tempFilePath,
        {
          folder: "Users",
        }
      );
      imageArray.push({
        public_id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }

  // case - single file upload process
  // let file = req.files.samplefile; // same name 'postform'
  // let result = await cloudinary.uploader.upload(file.tempFilePath,{
  //     folder: 'Users'
  //   })
  //   console.log(result);

  details = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    result,
    imageArray,
  };
  console.log(details);
  res.send(details);
});


/*GETFORM */
app.get("/getform", (req, res) => {
  res.render("getform");
});

/*POSTFORM */
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
