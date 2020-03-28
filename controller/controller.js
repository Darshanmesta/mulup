const multer=require('multer')
const path=require('path')
let Product=require('../model/model')
const storage= multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,'Doc-'+Date.now()+path.extname(file.originalname))
    }
})


module.exports={
    home:(req,res)=>{
        res.render('index')
    },

    upload:(req,res)=>{

        var upload=multer({storage:storage,
        limits:{filesize:6*1024*1024}}).array('myFile',5)

        upload(req,res,err=>{
           
            var obj= req.files
            

            for(var i=0;i<obj.length;i++){
                var obj1=obj[i]
                console.log(obj1)

                let data = new Product(obj1)


                data.save().then(result=>{
                    console.log("Data has been saved successfuly to Database")
                }).catch(err=>{
                    console.log("Data save Failed")
                })
            }



            if(req.files===undefined){
                alert("Please select at least one file")
            }
            if(err){
                res.status(400).send("Error <a href='/>Return Home </a>'")
            }
            else{
                res.status(200).send("Success <a href='/'> Retrun Home </a>")
            }
        })

    }
}