/**
 * Created by suman on 08/05/16.
 */

var core = require('chanakya');
var _ = require('lodash');
var Q = require('q'),
  http = require('http');

var ah = require("../ajaxHandler.js");

var getBalanceDeferred = require("../valueStore.js");
var balanceDef = getBalanceDeferred();

core.response('fail', function (to) {
  return {
    text: `I am sorry ${to.first_name}, I am unable to understand what you mean.`
  };
}, 'greetings');

this._deferred = Q.defer();
var self = this;

balanceDef.promise.then(null,null,function(balance){
  self._deferred.resolve(balance);
});

core.response('success', function (to) {

  var deferred = Q.defer();

  self._deferred.promise.then(function(balance){
    ah.put("https://polar-atoll-33216.herokuapp.com/users/1",{
      "id": 1,
      "balance": balance,
      "currency": "$"
    }).then(function(){
      self._deferred = Q.defer();

      deferred.resolve({
        text:'updated to '+ balance
      });

    });
  });
  
  
  return deferred.promise;

}, 'greetings');
