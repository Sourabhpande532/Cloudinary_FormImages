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









 */
