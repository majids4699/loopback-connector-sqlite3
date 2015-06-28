var DataSource = require('loopback-datasource-juggler').DataSource;

var config = require('rc')('loopback', {test: {sqlite: {}}}).test.sqlite;

global.getDataSource = global.getSchema = function () {
  var db = new DataSource(require('../'), config);
  db.log = function (a) {
     console.log(a);
  };
  return db;
};
