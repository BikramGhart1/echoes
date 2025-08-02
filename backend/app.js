const express=  require('express');
const app=express();
const nodemailer= require('nodemailer');
require('dotenv').config();

const transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }
});

const sendEmail=async(toEmail)=>{
   await transporter.sendMail({
    from:`Venerable <${process.env.EMAIL_USER}>`,
    to:toEmail,
    subject:'Hey this is test',
    html:`<p>Nothing much</p>`
   });
};

app.get("/",(req,res)=>res.json({name:"ram",age:23}));

app.get("/send", async (req, res) => {
  try {
    await sendEmail("roukglass673@gmail.com"); // Replace with your test email
    res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(3000,()=>{
  console.log('Listening to port', 3000);
})