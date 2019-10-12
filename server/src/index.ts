/*
 * index.ts
 *
 * Notes:
 * This file is where a lot of the magic happens. I create, configure,
 * and start the server here. I also create the database connection pool with
 * TypeORM's createConnection function.
 * ----------------------------------------------------------------------------
 * I use express for my server framework here because it's popular & there are
 * jobs for it, so don't get the wrong idea, this framework is dated & middling
 * at best. It doubles as my silent revenge on code-hipsters everywhere.
 * ----------------------------------------------------------------------------
 */

/*
 * This is an ES6 "import" statement. It can pull functions, classes, and even
 * data from another file. The "express" on the left side is the variable
 * you're setting it to and the "express" string on the right is where you're
 * importing the code from (in this case, the node module named "express")
 * This one is importing the express "package" in it's entirety. (Note the
 * lack of curly brackets). For more info on import statements in ES6, read
 * this MDN page about them. Don't worry if you don't understand everything
 * yet, it's a lot to take in.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * ----------------------------------------------------------------------------
 * You might see something more like const express = require('express') as
 * you work with node. That's the old way to import packages in node, and
 * still the only way (for now!) if you're not using a transpiler like
 * typescript or babel.
 * ----------------------------------------------------------------------------
 * For more info on JS packages, read up on what NPM is & does. This article
 * covers the basics, but there's a lot to learn.
 * https://en.wikipedia.org/wiki/Npm_(software)
 */
import express from 'express';

/*
 * This is also an ES6 import; The difference with this one is those curly
 * brackets I mentioned above. They let the user import a specific
 * part of the package or file instead of the whole thing.
 * ----------------------------------------------------------------------------
 * In this case, I'm importing a function, but it could just as easily be a
 * class or a plain object that was exported from the package.
 * ----------------------------------------------------------------------------
 * This function creates a "connection pool" for the mongo database I'm using.
 * I'll dig into that a bit more when I actually use the function.
 *
 */
import { createConnection } from 'typeorm';

// Renamed for clarity when I call it. "config" isn't sufficently expressive.
import { config as dotenvConfig } from 'dotenv';

// Adds Environment Vars from the .env shell file
dotenvConfig();

// Creates the express "App" so that I can do things with it.
const App = express();

// Starts the server once everything's configured
App.listen(process.env.PORT);
