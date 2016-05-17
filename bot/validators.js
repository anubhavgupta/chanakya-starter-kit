/**
 * Created by suman on 09/05/16.
 */

var core = require('chanakya'),
  Q = require('q');

core.validator('isGreetings', function (message) {
  return Q.fcall(function () {
    return message == 'getBalance';
  });
});
