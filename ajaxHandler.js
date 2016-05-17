var request = require('request');
var q =  require('q');


function AjaxHandler(){


    this.get = function(url){

        var deferred  = q.defer();

        request({
            url:url,
            headers: {
                'Content-Type': 'application/json'
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                deferred.resolve(JSON.parse(body));
                console.log(url,body);// Show the HTML for the Google homepage.
            }
            else{
                deferred.reject();
            }
        });


        return deferred.promise;
    };

    this.post = function(url,data,qs){

        var deferred  = q.defer();

        request({
            url: url,
            qs: qs||{},//{access_token:token},
            method: 'POST',
            json: data,
        }, function(error, response, body) {
            if (error) {
                deferred.reject();
                console.log('Error sending messages: ', error)
            } else if (response.body.error) {
                deferred.reject();
                console.log('Error: ', response.body.error)
            }
            else{
                deferred.resolve(response);
            }
        });


        return deferred.promise;
    };

    this.put = function(url,data,qs){

        var deferred  = q.defer();

        request({
            url: url,
            qs: qs||{},//{access_token:token},
            method: 'PUT',
            json: data,
        }, function(error, response, body) {
            if (error) {
                deferred.reject();
                console.log('Error sending messages: ', error)
            } else if (response.body.error) {
                deferred.reject();
                console.log('Error: ', response.body.error)
            }
            else{
                deferred.resolve(response);
            }
        });


        return deferred.promise;
    };

}


module.exports = new AjaxHandler();
