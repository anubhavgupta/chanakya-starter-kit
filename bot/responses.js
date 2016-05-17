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

core.response('success', function (to) {
  
  var deferred = Q.defer();

  balanceDef.promise.then(null,null,function(balance){

    ah.put("https://polar-atoll-33216.herokuapp.com/users/1",{
      "id": 1,
      "balance": balance,
      "currency": "$"
    }).then(function(){
      
      deferred.resolve({
        text:'updated to '+ balance
      });
       
    });
  });

  return deferred.promise;

}, 'greetings');
