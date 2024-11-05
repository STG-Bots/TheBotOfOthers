const { Schema, model } = require("mongoose");

const exampleSchema = new Schema({
    value: Number
});

module.exports = model("exampleSchema", exampleSchema);