const mongo = require('mongo');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//mongoose connection
 mongoose.connect("mongodb://localhost:27017/activitiesTracker");


const customersSchema = new Schema({
    items: { type: String, required: true},
    cost: Number,
    quantity: Number,
    account: Number
});

const vendorsSchema = new Schema({
  account: Number,
  purchases:[{
    item_id: [String],
    date_purchased:[String]
  }]
});

const customers = mongoose.model('customers', customerSchema);
const vendors = mongoose.model('vendors', vendorsSchema);

module.exports = {customers, vendors};
