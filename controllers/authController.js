const router = require('express').Router();
router.get('/register', (req, res)=>{
    res.render('register', {title: 'Register'});
});
router.post('/register', (req, res)=>{
    console.log(req.body);
    res.redirect('/auth/register')
})


router.get('/login', (req, res)=>{
    res.render('login', {title: 'Login'})
})
router.post('/login', (req, res)=>{
    console.log(req.body);
    res.redirect('/auth/login')
})

module.exports = router;