const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(req.user == undefined){
        res.redirect('/user/no-permission');
    }else {
        next();
    }
};

router.get('/logged', (req, res) => {
    console.log(req.user);
    const userName = req.user.name.givenName
    const bigUser = userName.toUpperCase();
  res.render('logged', {picture: req.user.photos[0].value, user: bigUser});
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
    res.render('profile');
});

router.get('/profile/settings', isLogged, (req,res)=> {
    res.render('settings');
});



module.exports = router;