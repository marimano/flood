# Flood on Reach

###Getting started

The flood app is scaffolded with [Yeoman](http://yeoman.io/), uses [Grunt](http://gruntjs.com/) for task management and [Bower](http://bower.io/) for web package management.  If you're not familiar with these tools, you should take a look at the docs and get them installed.  

flood uses [require.js](http://requirejs.org/) to manage dependencies between JavaScript files and [backbone.js](http://backbonejs.org/) to stick it all together. 

flood also has a server written in node.js that handles user authentication and model synchronization. 

####Installing dependencies for the app

To install all of the dependencies for the flood app, run the following commands in the root directory:

	bower install
	npm install

This will install all of the development dependencies for Grunt and all of the public dependencies with bower.

####Installing dependencies for the server

To install all of the node.js dependencies for the flood server, run the following commands in the "server" directory:

	npm install

You will also need to install MongoDB and run an instance on port 27017, the default port for MongoDB.  You can get MongoDB [here](http://www.mongodb.org/downloads).


####Running the server

For development, I recommend using the great nodemon tool:

	npm install -g nodemon

Go to the "server" directory and run:

	nodemon app.js

You can also run the server using:

	node app.js


####Building for the web (outdated)

The entire app can be compressed into lightweight, minified, and concatenated css, js, and html files using Grunt:

	grunt 


####Building for the desktop

flood can be used as a standalone application via node-webkit.  Just do this:

	grunt desktop

This will generate binaries for use on Mac and Windows in the dist_desktop folder.


###License

The MIT License (MIT)

Copyright (c) Peter Boyer 2014

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

