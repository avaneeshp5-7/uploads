const exp=require("express");
const bp=require("body-parser");
const mongo=require("mongojs")
con=mongo("mongodb://localhost:27017/imagedb")
const uploadfile=require("./API/Router/uploadapi")
const app=exp()
app.use(exp.static(__dirname))
app.use(bp.json())
app.use("/uploadfile",uploadfile)
app.listen(3000)
console.log("Running with 3000")
