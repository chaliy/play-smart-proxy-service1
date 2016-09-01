const _ = require('lodash');
const minimatch = require('minimatch');
const employees = require('../../data/employees.json');

module.exports.list = (req, res, next) => {
  let results = _(employees).take(4);
  return res.json(results);
}

module.exports.item = (req, res, next) => {

  let employee = _.find(employees, { id: req.swagger.params.id.value });
  if (employee){
      return res.json(employee);
  }

  return res.status(404).send('Sorry cant find that!');
}

module.exports.search = (req, res, next) => {
  let query = req.swagger.params.q.value;
  let results = _(employees)
                  .filter(empl => minimatch(empl.fullName, query))
                  .take(4);
  return res.json(results);
}

module.exports.create = (req, res) => {
  return res.json(`Hello world!`);
}
