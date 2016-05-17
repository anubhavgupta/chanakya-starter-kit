/**
 * Created by suman on 09/05/16.
 */

var core = require('chanakya'),
  Q = require('q');

var getBalanceDeferred = require("../valueStore.js");


var balanceDef = getBalanceDeferred();


core.validator('isGreetings', function (message) {
  return Q.fcall(function () {
    var correctMsg = false;
    if(message.indexOf('setBalance') == 0){
      correctMsg = true;
      var balance = parseInt(message.split('setBalance')[1]);
      console.log("validator match ", balance);
      balanceDef.notify(balance);
    }
    return correctMsg;
  });
});
