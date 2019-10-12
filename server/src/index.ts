/*
 * index.ts
 *
 * Notes:
 * This file is where a lot of the magic happens. I create, configure,
 * and start the server here. I also create the database connection pool with
 * TypeORM's createConnection function.
 * -----------------------------------------------------------------------------
 * I use express for my server framework here because it's popular & there are
 * jobs for it, so don't get the wrong idea, this framework is dated & middling
 * at best. It doubles as my silent revenge on code-hipsters everywhere.
 * -----------------------------------------------------------------------------
 */

/*
* This is an ES6 "import" statement. It can pull functions, classes, and even
* data from another file. This one is importing the express "package"
* in it's entirety. (Note the lack of curly brackets)

* You might see something more like const express = require('express') as
* you work with node. That's the old way to import packages in node, and still
* the only way if you're not using a transpiler like typescript or babel.

* For more info on JS packages, read up on what NPM. This article covers the
* basics, but there's a lot to learn.
*  https://en.wikipedia.org/wiki/Npm_(software)
*/
import express from 'express';

// This is another import statement, except this one imports a specific part of
// the typeORM package that abstracts away nasty mongoDB query syntax for us.
import { createConnection } from 'typeorm';

// Renamed for clarity when I call it. "config" isn't sufficently expressive.
import { config as dotenvConfig } from 'dotenv';

// Adds Environment Vars from the .env shell file
dotenvConfig();

// Creates the express "App" so that I can do things with it.
const App = express();

// Starts the server once everything's configured
App.listen(process.env.PORT);
