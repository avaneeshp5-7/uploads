var exp=require("express");
var fs = require('fs');
var buffertrim = require('buffertrim')
var expfile=require("express-fileupload")
var app=exp()
mg=require("mongojs")
con=mg("mongodb://localhost:27017/nalax")
app.use(expfile())
app.post("/",function(r,s){  
  imgtype=r.files.filename.mimetype
  
//   var ff = r.files.filename.data
//    console.log(ff.length)


// var stats = fs.statSync('/ff');
// var fileSizeInBytes = stats['size'];
// var fileSizeInMegabytes = fileSizeInBytes / 1000000.0
// console.log(fileSizeInMegabytes)

  if(imgtype="image/png" || "image/jpeg"){
     count=r.files.filename
     fname=r.files.filename
     ts=new Date/1000;
     ts=parseInt(ts)
     fname=r.files.filename.name
     fname=ts+"_"+fname
      count.mv("C:/Users/CHANDAN/Desktop/Upload/src/assets/"+fname,function(er,reesult){
          if(er)
          {
              s.send(er)
          }
          else
          {
              con.image.save({image:fname},function(err,result){
              })
              s.redirect("http://localhost:4200/;iname="+fname)
          }
      })

  }
  else
  {
    s.redirect("Currect File")
  }    
})
module.exports=app