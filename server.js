const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const route=require('./router/route')
const mongoose=require('mongoose')
const config=require('./config/db')

const PORT= 5300;


mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(result=>{
    console.log("Mongoose Connection successful")
},
err=>{
    console.log("Mongoose connection Failed")
})

app.set('views','./views')
app.set('view engine','ejs')

app.use('/',route)
app.use(bodyParser.urlencoded({extended:true}))


app.listen(PORT,()=>{
console.log("The server is up and running at 5300")
})