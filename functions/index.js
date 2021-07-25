const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JFcgMHFvMiG2EjtLGdyNZAhrJZAhzCP9LqxErUtR4E22VcwlWredkBqdI0xZURJyuhzknlbdPfVg9l8EDguVclL00McKPLWcX");

// this how we setup an API and these are the things we need
// and good practice to follow below structure
// 1). APP config
// 2). Middleware
// 3). API routes
// 4). Listen command


// - APP config setting up express server
const app = express();

// - Middleware  express.json will help to send and pass data in json format
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
// APIs have different kinds of requests they have get request, post request, pull request etc etc...

app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // total is nothing but amount in subunits as we did *100. or we can also write code as request.params
  // if we cross check in payments.js we have total variable which is query param the way we get the variable is

  console.log("Payment request recieved for the amount >>", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
    // status 201 is OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command
exports.API = functions.https.onRequest(app)
