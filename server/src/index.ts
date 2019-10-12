// I can use ES6 imports thanks to typescript transpiling them out for me.
import express from 'express';

// Renamed for clarity when I call it. "config" isn't sufficently expressive.
import { config as dotenvConfig } from 'dotenv';

// Adds Environment Vars from the .env shell file
dotenvConfig();

// Creates the express "App" so that I can do things with it.
const app = express();

app.listen(process.env.PORT);
