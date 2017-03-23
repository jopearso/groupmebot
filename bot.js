var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var d = new Date();
var n = d.getDay();
var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]),
        botRegex = /^\Coors?$/;
        botRegex = /^\Coors lab?$/;
        botRegex = /^\Anyone wanna go to coors lab?$/;
        botRegex = /^\Currs?$/;
        botRegex = /^\Lab?$/;
        botRegex = /^\Coors?$/;
        botRegex = /^\tour?$/;
        botRegex = /^\coors lab?$/;
        botRegex = /^\Coors lab?$/;

    if (request.text && botRegex.test(request.text)) {
        if (n = 3) {
            this.res.writeHead(200);
            postMessage();
            this.res.end();
        }
        else if (n = 2) {
            this.res.writeHead(200);
            postMessage1();
            this.res.end();
        }
        else {
            this.res.writeHead(200);
            console.log("idc")
            this.res.end();
        }
    } else
        this.res.writeHead(200);
    console.log("idc");
    this.res.end();
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = "Its Wednesday my dude";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessage1() {
    var botResponse, options, body, botReq;

    botResponse = "You misspelled Pint Night;

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id": botID,
        "text": botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function (res) {
        if (res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function (err) {
        console.log('error posting message ' + JSON.stringify(err));
    });
    botReq.on('timeout', function (err) {
        console.log('timeout posting message ' + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

exports.respond = respond;