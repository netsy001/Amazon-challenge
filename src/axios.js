import axios from "axios";

const instance = axios.create({
    // THE API (cloud function url ) URL
    baseURL: "http://localhost:5001/myshop-d68d9/us-central1/API"
});
// the above URL has /API bcz if we check our backend which is functions and index.js we have exports.API 
export default instance;