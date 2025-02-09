const { getAllCustomers, addCustomer, searchCustomers } = require("../controllers/customersController");

const customerRoutes = {
  GET: {
    '/customers': getAllCustomers,
    '/search': searchCustomers,
  },
  POST: {
    '/customers': addCustomer
  }
};

module.exports = customerRoutes;
