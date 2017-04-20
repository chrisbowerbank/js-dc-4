var express = require("express")
var passport = require('passport')

var User = require('../models/user')


// Create a router for handling our application as
// well as our sign-up flow
var router = express.Router()

// Index route
router.get("/", function( req, res ) {

  res.render('index')

})

router.get('/signup', function( req, res ){

  res.render('signup')
}).post('/signup', function( req, res ){

  var newUser = new User({ username: req.body.username })
  User.register( newUser, req.body.password, function(err, user){
    if (err) {
      return res.render('register', { account: user })
    }
    passport.authenticate('local')( req, res, function() {})

  })

})


router.get('/login', function(req, res){

  res.render('login', {user: req.user} )
})


router.get('/logout', function( req, res ){
  req.logout()
  res.redirect('/')


})




module.exports = router
