const express=require('express')
const appRoute=express.Router()
const control=require('../controller/controller')

appRoute.route('/').get(control.home)
appRoute.route('/upload').post(control.upload)


module.exports=appRoute;