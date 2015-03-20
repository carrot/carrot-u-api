# carrot-u-api

A very basic but thoroughly documented Express API for use in Carrot U API classes.

### The stack

- [MongoDB](http://www.mongodb.org/), a NoSQL database.
- [Node.js](https://nodejs.org), a super-speedy environment for writing web applications in JavaScript.
  - [npm](http://npmjs.org), *the* Node.js package manager.
  - [Express](http://expressjs.com/), a web framework for Node.
  - [Mongoose](http://mongoosejs.com/), a MongoDB framework for Node.

### The structure

```
├── README.md
├── lib
│   ├── candy.js    The Mongoose `model` for Candy.
│   └── index.js    The script run on `start`; includes the routes
                    and starts the server at the specified port.
└── package.json    The metadata used by npm; includes project
                    dependencies and a `start` script.
```

### Installation

1. Ensure you have the following prerequisite software installed:

  - **Node.js:** To see if Node.js is installed, run `node -v`; if a version number is returned, you're all set.
  - **MongoDB:** To see if MongoDB is installed, run `mongod --version`; if a version number is returned, you're all set.

  If either package is missing, install them via [Homebrew](http://brew.sh/), an OS X package manager. To be sure Homebrew is installed, run `brew -v`; if a version number is returned, you're all set. If the command isn't found, install Homebrew with the following command:

  ```sh
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

  Then, install your missing dependencies and *follow the instructions output by Homebrew to ensure the software is started now and on login*:

  - **Node.js:** `brew install node`
  - **MongoDB:** `brew install mongo`

2. Change into the directory you'd like to clone the project to.  For example:
   ```sh
   cd ~/Documents
   ```

3. Clone the repository:
   ```sh
   git clone git@github.com:carrot/carrot-u-api
   ```

4. Change into the cloned repository:
   ```sh
   cd carrot-u-api
   ```

5. Start the server:
   ```sh
   npm start
   ```
