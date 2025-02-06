const { getAllCustomers, addCustomer } = require("../controllers/customersController");

const customerRoutes = {
  GET: {
    '/customers': getAllCustomers,
  },
  POST: {
    '/customers': addCustomer
  }
};

module.exports = customerRoutes;
