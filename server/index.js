require('dotenv').config();
const bodyParser = require("body-parser")
    , express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require("massive")
    , stripe = require("stripe")(process.env.REACT_APP_STRIPESK)
    , nodemailer = require('nodemailer')
    , path = require('path');
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());
massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("server connected")
    app.set('db', db)
})

//--------auth0 strategy--------/
passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTTD,
    clientSecret:process.env.AUTH_CLIENTSECRET,
    callbackURL:process.env.AUTH_CALLBACK
//check if user exists
// if they do invoke done with user id
//if not create new user
//then invoke done with user id  
}, function(accessToken, refreshToken, extraParams, profile, done){ 
    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then( user => {
        if(user[0]){
          return  done(null, user[0].id);
        }
        else{
            db.create_user([
                userData.name,
                userData.email,
                userData.picture,
                userData.identities[0].user_id
            ]).then(user => {
                return done(null, user[0].id)
            })
        }
    })
}))
passport.serializeUser( function(id, done){
    done(null, id)
})
passport.deserializeUser( function(id, done){

   app.get('db').find_session_user([id]).then((user) =>{
    done(null, user[0]);
    }
)
    
})
app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect:'/auth'
}))

app.get("/auth/me", (req, res)=>{
    if(req.user){
        return res.status(200).send(req.user);
    }
    else{
        return res.status(401).send('need to log in!')
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(process.env.REDIRECT)
})


/////////////////Blog End points ////////////////////

app.post('/api/addBlog', (req, res ) =>{

  if(req.user){
      console.log(req.user);
    const db = app.get('db');
    const { title, blog, author, imageUrl} = req.body;
    console.log(title,blog,author, imageUrl)
    db.create_blog_post([title,blog,author, imageUrl]).then(res.status(200))
    
}else{
    return res.redirect('localhost:3000/401')
}}  )

app.get('/api/getBlogs', (req,res) => {
    console.log(req.user)
    const db = app.get('db');
    db.get_all_blogs().then((posts) => res.send(posts))
})

app.post('/api/deleteBlog', (req,res) => {
    if(req.user){       
    const db = app.get('db');
    console.log(req.body.id)
    
    db.remove_blog_by_id([req.body.id])
}else{
    return res.status(401).send('need to log in!')
}})

app.get('/api/getAllOpp', (req, res) => {
    const db = app.get('db');
    db.get_all_volunteer().then((options) => res.send(options))
})
app.post('/api/addvolunteer', (req, res ) =>{
    if(req.user){
    const db = app.get('db');
    console.log(req.body);
    const { title, details, link, overseas, image} = req.body;
    // console.log(title,blog,author)
    db.create_volunteer_post([title,details,link,image, overseas ]).then(res.status(200))
}else{
    return res.status(401).send('need to log in!')
}})
app.post('/api/deleteOpp', (req,res) => {
    if(req.user){
    const db = app.get('db');
    console.log(req.body.id)
    
    db.remove_opp_by_id([req.body.id])
}else{
    return res.status(401).send('need to log in!')
}})

app.get('/api/getOverseasOpp', (req,res) =>{
    const db = app.get('db')
    db.get_overseas_volunteer().then((options) => res.send(options))

})

app.get('/api/getLocalOpp', (req,res) =>{
    const db = app.get('db')
    db.get_local_volunteer().then((options) => res.send(options))

})



////////////////////Stipe////////////////////////


app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'donation from site'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });
  ///////////////////NODEMAILER ENDPOINTS////////////////////////

  app.post('/api/AddEmail', (req,res) =>{ console.log(req.body)
    const db = app.get('db')
    const {email} = req.body

    db.add_email([email]);
    

nodemailer.createTestAccount((err, account) => {
    
       
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, 
            auth: {
                user: "thenonprofit40@gmail.com", 
                pass: "this is my password"  
            }
        });
        
        
        let mailOptions = {
            from: '"The Non Profit" <thenonprofit40@gmail.com>', // sender address
            to: `${email}`, // list of receivers
            subject: 'Thank you', // Subject line
            text: 'Thank you for subcribing to The Non Profit NewsLetter ', // plain text body
            html: '<b>"Thank you for subcribing to The Non Profit NewsLetter "</b>' // html body
        };
    
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        });
    });
})
  


app.get('/api/getAllEmails', (req, res) => {
    if(req.user){
    const db = app.get('db')
    db.get_all_emails().then((resp) => {
        
        res.send(resp)})

}else{
    return res.status(401).send('need to log in!')
}})

app.post('/api/sendNewsLetter', (req,res) => {
    if(req.user){
        
    const {email} = req.body[0]
    const {title, body} = req.body[1]

    nodemailer.createTestAccount((err, account) => {
        
           
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, 
                auth: {
                    user: "thenonprofit40@gmail.com", 
                    pass: "this is my password"  
                }
            });
            
            
            let mailOptions = {
                from: '"The Non Profit" <thenonprofit40@gmail.com>', // sender address
                to: `${email};`, // list of receivers
                subject: `${title}`, // Subject line
                text: `${body}`, // plain text body
                html: `<b>${body}</b>` // html body
            };
        
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
              
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
            });
        });
    }else{
        return res.status(401).send('need to log in!')
    }})

    
    
    app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../build/index.html'));
    })

const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port: ${PORT} `))