'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return {
    id: [(0, _uniqueId2.default)(), _faker2.default.random.number()].join('-'),
    title: _faker2.default.lorem.sentence(),
    link: _faker2.default.internet.url(),
    media: {
      m: _faker2.default.image.imageUrl() + '?_=' + (0, _uniqueId2.default)()
    },
    date_taken: _faker2.default.date.past(),
    description: '<p>' + _faker2.default.lorem.paragraph() + '</p>',
    published: _faker2.default.date.past(),
    author: _faker2.default.internet.email() + ' (' + _faker2.default.name.findName() + ')',
    author_id: _faker2.default.random.uuid(),
    tags: (0, _times2.default)(_faker2.default.random.objectElement([0, 1, 2, 3, 4]), _faker2.default.lorem.word).join(' ')
  };
};