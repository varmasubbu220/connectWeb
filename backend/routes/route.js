const express = require('express');
const app=express()
const router= express.Router()

const Register=require('../controllers/registerapi')
const Login=require('../controllers/loginapi')
const Getuser=require('../controllers/getuserobj')

router.route('/registration').post(Register)
router.route('/login').post(Login)
router.route('/getuser').get(Getuser)

module.exports=router