'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _createPhoto = require('./createPhoto');

var _createPhoto2 = _interopRequireDefault(_createPhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return {
    title: _faker2.default.lorem.sentence(),
    link: _faker2.default.internet.url(),
    description: _faker2.default.lorem.paragraph(),
    items: (0, _times2.default)(20, _createPhoto2.default)
  };
};