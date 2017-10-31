require('dotenv').config();
const bodyParser = require("body-parser")
    , express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require("massive")
    
const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
const db = app.get('db');
app.use(passport.initialize());
app.use(passport.session());
massive(process.env.CONNECTION_STRING).then((db) => {
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
    successRedirect: 'http://localhost:3000/Donate',
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
    res.redirect('http://localhost:3000/')
})

app.post('/api/addBlog', (req, res ) =>{
    
    const { title, blog, author} = req.body;
    console.log(title,blog,author)
    db.create_blog_post([title,blog,author]).then(res.status(200))
})

const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port: ${PORT} `))