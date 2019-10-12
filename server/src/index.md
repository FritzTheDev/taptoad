

```javascript
import express from 'express';
```
This is an "import" statement. It can pull functions, classes, and even
data from another file. The "express" variable on the left side is what
you're setting it to and the "express" string on the right is where you're
importing the code from (in this case, the node module named "express")
This one is importing the express "package" in it's entirety. (Note the
lack of curly brackets). For more info on import statements in ES6, read
this Mozilla Developer Network (MDN) page about them. Don't worry if you
don't understand everything yet, it's a lot to take in.
MDN Import Statement Documentation:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import


    You might see something more like const express = require('express') as
    you work with node. That's the old way to import packages in node, and
    still the only way (for now!) if you're not using a transpiler like
    typescript or babel.

For more info on JS packages, read up on what the Node Package Manager (NPM)
is & does. This article covers the basics, but there's a lot to learn.
Wikipedia article on NPM
https://en.wikipedia.org/wiki/Npm_(software)