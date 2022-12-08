const express = require('express');
const { twilioFunction } = require('../Js/twilio');
// import { express } from 'express';
const app = express();
// import {twilioSend}  from '../Js/twilio.js';


setInterval(() => {
  twilioFunction()
}, 5000)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});