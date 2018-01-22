'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = undefined;

var _jsonServer = require('json-server');

var _jsonServer2 = _interopRequireDefault(_jsonServer);

var _commandLineArgs = require('command-line-args');

var _commandLineArgs2 = _interopRequireDefault(_commandLineArgs);

var _createDb = require('./api/createDb');

var _createDb2 = _interopRequireDefault(_createDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionDef = [{ name: 'port', alias: 'p', type: Number }];

var run = exports.run = function run() {
  var options = (0, _commandLineArgs2.default)(optionDef);
  var port = options.port || 8080;
  var server = _jsonServer2.default.create();
  var router = _jsonServer2.default.router((0, _createDb2.default)());
  var middleware = _jsonServer2.default.defaults();

  server.use(middleware);
  server.use(router);
  server.listen(port, function () {
    console.log('photo service is running on port:', port); // eslint-disable-line no-console
  });
};

exports.default = run;