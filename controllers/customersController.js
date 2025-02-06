const customerService = require("../services/customerService");
const handleJSONRequest = require("../utils/handleJSONRequest");

const getAllCustomers = (req, res) => {
  const customers = customerService.getAll();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(customers));
};

const addCustomer = (req, res) => {
  handleJSONRequest(req, res, (data) => {
    customerService.add(data);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Customer added successfully" }));
  });
};

module.exports = {
  getAllCustomers,
  addCustomer
};
