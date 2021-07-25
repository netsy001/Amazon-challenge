import axios from "axios";

const instance = axios.create({
    // THE API (cloud function url ) URL
    baseURL: "https://us-central1-myshop-d68d9.cloudfunctions.net/API"

    // "http://localhost:5001/myshop-d68d9/us-central1/API" test link.... the above link is from functions on firebase which is live url
});
// the above URL has /API bcz if we check our backend which is functions and index.js we have exports.API 
export default instance;