// bring in the database connection
const db = require('./conn');

// declare the class
class Restaurant {
    // getAll is a static method
    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we 'return' the call to db.any
        return db.any(`select * from restaurants`);
    }
}

// export the class
module.exports = Restaurant;