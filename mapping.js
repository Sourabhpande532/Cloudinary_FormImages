/**
 @ABOUT_FILES_&_IMAGES_ON_CLOUDINARY
 A lot of time when the backend is not configured ore rather i can say the srrategies not to have this blot but rather to just gie you a file iteself.
  
 @_!IMP: it always expect you should not give the file name you shoud give me "Data URL" very IMPORTANT.

 
 ----------------NEW-----------------

 ----------------HEADING-------------
 @💹TITLE:Cloudnary & EJS

 @📝Handling forms nd Images.

 @😶‍🌫️GONNA_FOCUS:->A little fronted is going to introduced in this section,once after finished this then just only focus on "Backend"';

 @💹😗FOCUS: Bootstrap, EJS,Cloudnary
 -creating some form by bear minimum use of "Bootstrap",

 @🔺FIRSTLY:
 Need to FOCUS on "EJS"
 @🧐why?? => you can also inject Bootstrap, plane HTML css & Javascript, then why "EJS":
 =>
 🎗️let's i can also inject those code like Bootstrap and plane HTML & Js here so thin I have to explicitely prepared my Backend here then I've to call fronted via Js,then I've to introdued "Cors",then again I've to introduced fetch request & whole bunch of things.i really want to do that.so for that some of "💹termplete enging" come into picture. that's is 

 -🔺EJS
  Ref:=> 🔗✈️ https://ejs.co/
  -🎗️By, the term termplete mean put HTML kind of code into "Node" environment kind of application.
  -🎗️EJS it use for full fladge web application in the mid case or some of the scalar "node" application Fact: no fronted itself.
  -🎗️Given the fact we'wont be using most of the industrey not preffer this approach this days.
  People preffer: API driven approach is more familier things so, need to be consume on mobile, as well as web so this one we use.

----==-----

  @ABOUT : Cloudnary(for 📝Handling our images)
  @sideInto: study about Cloudnary Api you'll be transefer you'r images, rotate you'r images & transform images find bugs lot more stuff yo'r'gonna 

  Why🧐 Cloudnary ?? Why Not 🖲️AWS,🖲️Azure,🖲️Firebase,🖲️self Hosted why not all one.??
  -🎗️because once after understand Cloudnary then almost same process with all of one that's what it is just you need to concern/overview ABOUT documentation reading.
 
  NEED_TO_FOLLOW_PROCCESS
  -🔺create folder "x"
  -🔺npm init -y
  -🔺npm install cloudinary ejs express,express-file-uploade
  -🔺npm i -D nodemon
 
  REf:-> ✈️🔗https://console.cloudinary.com/console/c-ff223b74b9853962b24f65c186b51e/getting-started


 ----------------NEW-----------------

 ----------------HEADING-------------
 @IDENTIFIRE😇😇
 @💹TITLE:How GET Work And Postman Issues
 @!Instruction:-> Use Postman
In this one we'r 📝Handling GET type "requist"
-while testing on Postman at first go you'll get undefined so for that we need use middleware 🔺app.use(express.json()); Now a'm able to receive the Data.

As soon as you made get request on "GOOGLE"
Then go to Google and search "xyz" name in the "querry" you'r gonna notice this one /serch/?1=hitesh observed.
@see https://www.google.com/search?q=hitesh+choudhary&sxsrf=APwXE

@😗KEEP_NOTE: whenever you search on "x" platform anything it goes into URL as we did see above e.g:

REF: ✈️🔗https://expressjs.com/en/4x/api.html#req.query(TO more clear)

@😗KEEP_NOTE:Always pass information "x-wwww-form-urlencoded
"not in form Data. because everything it needs to be travelled on urlencoded form pass "name" and "value" & as soon as you hit it'll give you a {} so for that we need one more middleware app.use🔺(express.urlencoded...) & all of url info come into body itself.

Why Need to pass extended:true🧐🧐?

when sometime you'r data come in complicated way like {
"fullname": {"firstname":"s","lastname":"p"}} via form so to get rid of that complication use that. in case that is also allow use "extended:true" in middleware.

Need to install 2 middleware 
-🔺app.use(express.json())
-🔺app.use(express.urlencoded({extended:true}))


 ----------------NEW-----------------------

 ----------------HEADING-------------------
 @--👉👉TITLE: TEMPLATE ENGINE(How to inject & all stuff)

 1) Ref: ✈️🔗https://ejs.co/ [EJS]
 2) Ref: ✈️🔗https://getbootstrap.com/ [Bootstrap]

 So,As we already download -------------------"EJS"
 -npm i ejs
 
In order to use EJS we need set some stuff
This atucally come as a part of "middleware" but the way is defferent it came as view enging middleware. 👇👇
-👉app.set("view engine", "ejs");
@😗KEEP_NOTE:-> If you want to use view engine & EJS of Course  It's an convenction you need to create "views" folder & create files into that.
-🔺getform.ejs
-🔺postform.ejs( make sure: this postform needs to be serve on web so it's get request not post) 

So, how we can deply this one Just use get request app.get(..)


 ----------------NEW-----------------------

 ----------------HEADING-------------------
 @--👉👉TITLE: Confusion in fronted via handling form 

 @ABOUT: GET form

 @😵KEEP_NOTE:
  Always talk to fronted one in order to clear some of the basic ground stuff.
 
 @😵KEEP_NOTE: 
  --TEMPLATE ENGINE send data in querry(IN URL) 🔺 e.g req.querry;
  --FRAMWORK LIKE REACT,ANGULAR send data in body itself 🔺 e.g req.body 
  O.W you'll face some error of 😱😱{}

  req.body it simply mean we'r receiving something info in either in body iteself(if Framework you use) or in querry iteself(if use termplete ENGINE) 

  if you check via post 
  🔗✈️http://localhost:5000/myapp

  @KEEP_ATTENTIONS@
  @COMPULSORY@....
  Need to pass this information while in the getform or anyform
  -🔺<form method:"GET" action="/x" />
  -🔺Need to name="x" filled in <input name="x"/> if you not pass you miss the field then 
  - if the data is comeing from termplete engine use req.querry o.w get {}
  - if the data is comeing from fronted pass req.body o.w get {}

  @😗KEEP_NOTE: Always send images in post form


 ----------------NEW-----------------------

 ----------------HEADING-------------------
 @--👉👉TITLE: 📝Handling Images In Forms

 @ABOUT: POST form 
 So, in this one how to handles files as well as images the post form data Always came in body itself(req.body);

 @REMEMBER:-> befoure uploade file on fronted need to pass MIDDLEWARE in this one we've
 - express-fileupload[Need to inject on that app.js]
 first require it then inject it app.use(....here....)
 
 Now need to dumb it down into ""/mypost"" method
 Hey,if you'r receiving any post kind of data in the formate of file just console.log(req.files) not sending in the body it's have defferent approach as of now send it into 
 -console.log(req.files);

 let's go on fronted & fill the form....
 Now i got ""undefined"" 🤔🤔 why ??

 to clear you you need to read little bit this docs

 Ref: ✈️🔗https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL [it Always support that @😱FACT:it's fronted one duty to all];
 
Then need to pass info here like that...
app.use(fileupload({useTempFiles: true,tempFileDir: "/tmp/"}

still "undefined 🤔🤔"
this is where exactly things comes up for fronted developer Now take a look on views/postform so this form is not ready to accept this images & images are not like "text" yes express help to turn it into req.body but this form is defferent type it's need to pass -👇👇

✈️✈️-""enctype="multipart/form-data""
it's fronted thing that's not you'r backend part.

NOW again one more time fill "postform" 
Now you'got data in console log name,data:<Buffer> why is the coming in the form of Buffer because in order to reduce expand porttion we pass 👇👇
""
app.use(fileupload({useTempFiles: true,tempFileDir: "/tmp/");

""
@IMP:-> above one plays a very crusial role onece you use the above options or get hand dirty in case you want to move data you can you might notice you get mv:[function:fn] in console either it could be move on our directory or server or might uploade something cloudinary or Aws 


 ----------------NEW-----------------------

 ----------------HEADING-------------------
 @--👉👉TITLE: 📝Upload images to cloudinary;

 @ABOUT: [MOREOVER on uploading]
 @LOCATION:[app.js]
 @Overview:
 @Ref: ✈️🔗 https://cloudinary.com/documentation/image_upload_api_reference

 @Ref: ✈️🔗https://console.cloudinary.com/console/c-ff223b74b9853962b24f65c186b51e/media-explorer

@Step-By-Step@
@require: const cloudinary = require("cloudinary").v2;
@NOTE:Need to ".v2" A/c to documentation see 1st link signin part

-🎗️We'r receiving all theis into req.files so instead seding into console send into details object. pass object x={fname:lname}; Need to send as a response.
-🎗️Then, coming back to file part 
-🎗️keep that request we've file & want to send to cloudinary HOW A'm gonna access file 
let file = req.file.samplefile;
@NOTE: As soon as you uploade on cloudinary it give you some "result" Back As per documentation.

then cloudinary.uploader.upload... it accept file & option({cloudinary folder name here}) need to pass (..here..)

-🎗️Pass api key need to pass on cloudinary.config({})
-🎗️pass cloud_name(string),api_key,api_secret 
Ref: ✈️🔗https://cloudinary/dashboard

Then go postform & filled it you got one error The "path" argument must sting so in order to resolve this route need to pass this info below one
@👇NOTE: while uploading Images need to PASS inside middleware app.use..
useTempFiles: true,tempFileDir: "/tmp/" that we were pass in app.use(..)

-🎗️NEED TO PASS DATA URL O.W ERROR!
-🎗️Need to pass ".tempFilePath" mandatory!.
-🎗️Need to pass async await because entirty of big project hang arround with promises!
-🎗️Use public_id as unique(on DB) it solve lot of Confusion when you upload you'r file with same name that time use "public_id";



 ----------------NEW-----------------------

 ----------------HEADING-------------------
 @--👉👉TITLE: 📝HANDLING MULTIPLES FILES & uploading THEM;

 @ABOUT: MOREOVER LIKE uploading Images
 @LOCATION:[📂views/postform.ejs, 📂app.js]
 @Overview:
 Let's discuss about How to upload MULTIPLES Images on Cloudnary here again tiny bit overview on fronted here.. where to go

 -➕🔺Need to go postform & Need to explicitely mention "multiple" tag on samplefile input filled where you upload all the images O.w you won't be able to send multiple images.
 -➕🔺Need to pass Array to send multiple Images heavily depends on how you accept the data.
 -➕🔺Come back to app.js in /mypost routes inside one pass some variable 
  e.g let result, let imageArray = [];
 -➕🔺Varify it via IF Condition 
  [@If we'v something into req.files then it works o.w not];
 -➕🔺Need to run "for loop" 
  @KeepNote: req.files.samplefile involve lot more file & Need to attach this samplefile because now it turn it into an Array
 -➕🔺upload process on Cloudnary via uploader need to attach ".tempFilePath"
 -➕🔺pass options as an folder inside one {folder:  "Users"} Cloudnary f name.
 -➕🔺push into Array in the form of object {..Need to pass 2 property..} 
  1st : public_id, 2nd: secure_url[@ROLE: this 2 can be put into DB itself & abruptly tell hey this are resources & customize that beside you can reuse coe anywhere insta,fb,amzon...]  
 -➕🔺Go fronted one & upload images
 -    
 @Ref: ✈️🔗 http://localhost:5000/postform

 */
