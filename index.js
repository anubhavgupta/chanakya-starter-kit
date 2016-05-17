/**
 * Created by suman on 16/05/16.
 */


var C = require('chanakya'),
  Cfb = require('chanakya-facebook');


var bot = C.bootstrap({
  mount: 'bot',
  expectation: 'greetings',
  token: 'EAAYQsWOUkEgBAAbVnyDYowE2Ha8B4aclIIGaQ1KlK9BLMlKrRRGv8ZCJ9W0ysr2SX24HZABnEZAcvCTA86849FHWqgfju9TZBU3tzkvtJ1JSD6un6MyaZBheICXdGlVkjFuWLbVhiYEmrHa1fALYo7qjghudh9EMUkhN5sTSWVAZDZD'
});

Cfb.init(bot);
