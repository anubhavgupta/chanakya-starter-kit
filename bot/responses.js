/**
 * Created by suman on 08/05/16.
 */

var core = require('chanakya');
var _ = require('lodash');
var Q = require('q'),
  http = require('http');

var ah = require("../ajaxHandler.js");

core.response('fail', function (to) {
  return {
    text: `I am sorry ${to.first_name}, I am unable to understand what you mean.`
  };
}, 'greetings');

core.response('success', function (to) {

  return ah.get("https://polar-atoll-33216.herokuapp.com/users/1")
      .then(function(userData){
          return {
            text:userData.balance
          }
      });

  /*return {
    text: `Hello ${to.first_name}, How are you?`
  };*/
}, 'greetings');
