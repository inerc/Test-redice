/**
 * Created by inerc on 03.10.16.
 */

var mongoose = require('mongoose');
console.log((mongoose.version));

var db = mongoose.createConnection('mongodb://localhost/Sk-Visualization');

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function callback () {
    console.log("Connected");
});


var UserSchema = new mongoose.Schema( {
    name: { type: String, default: "hahaha" },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    date: { type: Date },
    buff: Buffer
} );