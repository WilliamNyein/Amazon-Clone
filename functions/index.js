const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MFUNXJJYMTt2pJ2cPBFz2OAcTMCI4VBV5Po7Ny6sVbV58lkL29ukl9r4pViotjxFrgUvisK76GBZJJj2TnnI1Wn00UtlL9Cca')


const app = express()

app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res)=> res.status(200).send('Hello world'))
app.post('/payment',async(req,res)=>{
    let {amount,id} =req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:"USD",
            description:"Clover Bay",
            payment_method :id,
            confirm:true
        })
        console.log("Payment",payment)
        res.status(201).json({
            message:"Payment successful",
            success:true,
            amount:amount
        })
    }catch(err){
        console.log("error",err)
        res.json({
            message:"Payment failed",
            success:false
        })
    }
})

exports.api = functions.https.onRequest(app)
