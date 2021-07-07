const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require ("stripe")
("sk_test_51JA9VXSCv9B67se6IC24lt8NcWoTkB9s5VK2L4U6bxycIxTI8OOYgsbdeCdzWPxLWLGaZ7J2DtHo9102ZOW7CZuc00E2n2PqVN");
//const { request, response } = require("express");


//App

//App config
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//API routes

app.get('/hi', (request,response)=> response.status(200).send('hello world'))
app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM !!! for this amount >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

   })
   
})

    
 

//Listen Command
exports.api = functions.https.onRequest(app)
//endpoint
//http://localhost:5001/challenge-b0bad/us-central1/api
