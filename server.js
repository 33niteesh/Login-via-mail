const express=require('express')
const nm=require('nodemailer')
const cors=require("cors")
const sender=nm.createTransport({service:'gmail',auth:{user:'nsolutions.nsol@gmail.com',pass:'selxwbptxkhdyhfx'}})
const app=express()
app.use(cors())
app.use(express.json())
app.post("/send",cors(),async (req,res)=>{
    var {mailid,otpsent}=req.body;
    const reciver={from:"nsolutions.nsol@gmail.com",to:mailid,subject:"OTP Authentication",text:otpsent+" is your otp"}
    sender.sendMail(reciver,function(err,info){if(err){console.log(err)}else{console.log('sent')}})
})
app.listen("3000",()=>{console.log("running server")})