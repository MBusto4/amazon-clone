const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")
    ("sk_test_51JiPnGA9KroOqEE28pr3oNTildCSNoO0UD6w7cdaBkgd9pv59Nw1tnZLUhUCxuJyWflfGWbp4fvc4HfBxxpF8wR600RmHnpal8");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log("PAYMENT REQUEST RECIEVED!!--->", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    // OK we created something
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// Listen Command
exports.api = functions.https.onRequest(app);


// Example of an endpoint

// http://localhost:5001/clone-e2b31/us-central1/api