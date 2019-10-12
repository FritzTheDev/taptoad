/*
 * File Path:
 * src/index.ts
 *
 * File Notes:
 * The index file is where a lot of the magic happens for our server. I create,
 * configure, and start the server here. I also create the database connection
 * pool with TypeORM's createConnection function.
 * ----------------------------------------------------------------------------
 * I use express for my server framework here because it's popular & there are
 * jobs for it, so don't get the wrong idea, this framework is dated & middling
 * at best. Using it doubles as my silent revenge on bleeding-edge
 * code-hipsters everywhere, though, so that's a plus. 😂
 * ----------------------------------------------------------------------------
 * If popularity and employment opportunities aren't a concern, consider
 * something like Koa (Created by the same people as express) or Nest.js (A
 * Typescript-first abstraction layer over Express). I highly recommend both.
 * Koa: https://koajs.com/
 * NestJS: https://nestjs.com/
 */

/*
 * This is an "import" statement. It can pull functions, classes, and even
 * data from another file. The "express" on the left side is the variable
 * you're setting it to and the "express" string on the right is where you're
 * importing the code from (in this case, the node module named "express")
 * This one is importing the express "package" in it's entirety. (Note the
 * lack of curly brackets). For more info on import statements in ES6, read
 * this Mozilla Developer Network (MDN) page about them. Don't worry if you
 * don't understand everything yet, it's a lot to take in.
 * MDN Import Statement Documentation:
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
 * This is also an import statement; The difference with this one is those curly
 * brackets I mentioned above. They denote a "named import" that lets the user
 * import a specific part of the package or file instead of the whole thing.
 * See the MDN import page listed above for details.
 * ----------------------------------------------------------------------------
 * In this case, I'm importing a function, but it could just as easily be a
 * class or a plain object that was exported from the package.
 * ----------------------------------------------------------------------------
 * By the way, don't worry about what these functions we're importing
 * actually DO; We'll get to that when we use them. For now, just focus on how
 * we're pulling things in from other files.
 */
import { createConnection } from 'typeorm';

/*
 * Yet another import statement. In this one, I've used the "as" keyword to
 * override the name the author of the package chose when they created the
 * package. There are a few reasons you might do this. Variable name overlaps,
 * for instance.
 * ----------------------------------------------------------------------------
 * In this case it's because their name, "config", isn't very specific, and
 * seeing as this file will have a lot of configuration going on, I want to be
 * as explicit as possible. It will save me & others from inevitably having to
 * see *which* configuration "config" represents.
 */
import { config as dotenvConfig } from 'dotenv';

/*
 *
 *
 *
 */
dotenvConfig();

// Creates the express "App" so that I can do things with it.
const App = express();

// Starts the server once everything's configured
App.listen(process.env.PORT);
