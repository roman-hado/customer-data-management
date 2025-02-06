const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, '../data/customers.json');
const dataFormat = "utf-8";

const getAll = () => {
  const data = fs.readFileSync(dataPath, dataFormat);
  return JSON.parse(data).customers;
};

const add = (newCustomer) => {
  const data = JSON.parse(fs.readFileSync(dataPath, dataFormat));
  data.customers.push(newCustomer);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = {
  add,
  getAll
}
