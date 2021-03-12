"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var port = process.env.PORT || 3000;
/* ------- customers ------- http://localhost:3000/customers */
// customers: get-example 

app.route('/customers').get(function (req, res) {
  res.status(200).send(customers);
}) // customers: .post example 
.post(function (req, res) {
  /*
   * We are assuming here that an entire customer object is sent through the body
   * For a more robust API, you should implement a check here
   */
  var newCustomer = req.body; // req.body is an undefined object

  customers.push(newCustomer);
  /*
   * Here, we choose to return the customer object, but you could respond with anything such as a
   * generic message, etc.
   * When testing, you could console.log the complete customers array to see the added customer.
   */

  res.status(200).send(newCustomer);
});
/* http://localhost:3000/customers/1 */

app.route('/customers/:id').get(function (req, res) {
  var customer_id = req.params.id; //req.params.id fetches the id from the params

  var status = 400;
  var response = "Unable to fetch data!";
  customers.forEach(function (customer) {
    if (customer['id'] == customer_id) {
      res.status(200).send(customer);
    }
  }) // http://localhost:3000/customers/1 put-example
  .put(function (req, res) {
    var customer_id = req.params.id;
    var status = 400;
    var response = "Unable to fetch data!";
    var propertiesToChange = req.body;
    var updatedCustomer = {};
    customers.forEach(function (customer) {
      updatedCustomer = _objectSpread({}, customer, {}, propertiesToChange);
    });
    status = 200;
    response = updatedCustomer;
    res.status(status).send(response);
  }) // http://localhost:3000/customers/1 delete-example
  ["delete"](function (req, res) {
    var customer_id = req.params.id;
    var status = 400;
    var response = "Unable to fetch data!";
    var newCustomers = customers.filter(function (customer) {
      return customer;
    });
    status = 200;
    response = newCustomers;
    res.status(status).send(response);
  });
});
/* ------- invoices ------- http://localhost:3000/invoices */
// invoices: get-example 

app.route('/invoices').get(function (req, res) {
  res.status(200).send(invoices);
}) // invoices: .post example
.post(function (req, res) {
  var newInvoice = req.body;
  invoices.push(newInvoice);
  res.status(200).send(invoices);
});
/* http://localhost:3000/invoices/6 */

app.route('/invoices/:id').get(function (req, res) {
  var invoice_id = req.params.id;
  var status = 400;
  var response = 'Unable to fetch data!';
  invoices.forEach(function (invoice) {
    if (invoice['id'] == invoice_id) {
      res.status(200).send(invoice);
    }
  });
  res.status(status).send(response);
}) // http://localhost:3000/invoices/6: put-example
.put(function (req, res) {
  var invoice_id = req.params.id;
  var status = 400;
  var response = "Unable to fetch data!";
  var newInvoice = {};
  invoices.forEach(function (invoice) {
    newInvoice = req.body;
  });
  status = 200;
  response = newInvoice;
  res.status(status).send(response);
});
/* ------- port ------- */

app.listen(port, function () {
  console.log("Server running on port ".concat(port, "..."));
});
/* ------- fake data ------- */

var customers = [{
  id: 1,
  first_name: 'Fremont',
  last_name: 'Broader',
  email: 'fbroader0@bloglines.com',
  gender: 'Male',
  ip_address: '23.27.246.1'
}, {
  id: 2,
  first_name: 'Georgetta',
  last_name: 'Blamey',
  email: 'gblamey1@wisc.edu',
  gender: 'Female',
  ip_address: '17.110.6.159'
}, {
  id: 3,
  first_name: 'Meghann',
  last_name: 'Quillinane',
  email: 'mquillinane2@surveymonkey.com',
  gender: 'Female',
  ip_address: '237.88.226.148'
}, {
  id: 4,
  first_name: 'Kerby',
  last_name: 'Mate',
  email: 'kmate3@si.edu',
  gender: 'Male',
  ip_address: '81.44.87.187'
}, {
  id: 5,
  first_name: 'Loren',
  last_name: 'Brabon',
  email: 'lbrabon4@umich.edu',
  gender: 'Female',
  ip_address: '47.137.187.14'
}];
var invoices = [{
  id: 6,
  product: 'Island Oasis - Ice Cream Mix',
  price: '$0.78',
  currency: 'BRL',
  quantity: 17,
  type: 'Restaurants'
}, {
  id: 7,
  product: 'Ice Cream - Turtles Stick Bar',
  price: '$9.23',
  currency: 'EUR',
  quantity: 9,
  type: 'Marine Transportation'
}, {
  id: 8,
  product: 'Shrimp - Black Tiger 8 - 12',
  price: '$2.50',
  currency: 'COP',
  quantity: 20,
  type: 'Computer Communications Equipment'
}, {
  id: 9,
  product: 'Wine - Blue Nun Qualitatswein',
  price: '$8.52',
  currency: 'IDR',
  quantity: 64,
  type: 'Packaged Foods'
}, {
  id: 10,
  product: 'Truffle Shells - White Chocolate',
  price: '$7.51',
  currency: 'EUR',
  quantity: 65,
  type: 'Industrial Specialties'
}];