const customerService = require("../services/customerService");
const handleJSONRequest = require("../utils/handleJSONRequest");
const { ORIGIN } = require("../constants/globals");

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

const searchCustomers = (req, res) => {
  const { searchParams } = new URL(req.url, ORIGIN);
  const query = searchParams.get('query');
  const formattedQuery = query.toLowerCase();
  const customers = customerService.getAll();
  const filteredCustomers = customers.filter(c =>
    c.name?.toLowerCase().includes(formattedQuery) ||
    c.email?.toLowerCase().includes(formattedQuery)
    );

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(filteredCustomers));
};

module.exports = {
  getAllCustomers,
  addCustomer,
  searchCustomers
};
