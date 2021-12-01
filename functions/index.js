const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jvy7OCTquhTlKLOPDNVFWPzWCYYAdVgkB2UbW1s4JgYe60JpRbzg3i3RWXJvaXOPd6UeyMn3Co6T4ZfbGgRK4o300blptre8w');


//API


// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// -API routes
app.get('/' ,(request, response) =>response.status(200).send('hello'))

app.post('/payments/create', async (request,response) =>{
    const total = request.query.total;

    console.log('Payment Request received BOOM! for this amount>>>', total)
const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
});

response.status(201).send({
    clientSecret: paymentIntent.client_secret,
})
})
// -Listen command

exports.api = functions.https.onRequest(app);