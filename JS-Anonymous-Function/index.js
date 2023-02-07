const { hof } = require('./secret');

let res = hof('devsnest', function(input) {
  return input + ' is a great place for developers to nest!';
});

try { module.exports = { res } } catch (e) {}

