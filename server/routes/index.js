var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hell', function(req, res, next) {
  //ajax request for ycombinator
  var newsUrl = 'https://news.ycombinator.com';
  var newsHtml = request(newsUrl, function (err, response, html){

    // console.log(html);
    //parse html
    var $ = cheerio.load(html);
    //one way to select first title
    var newsTitle = $('td.title a').first().text();
    console.log(newsTitle);

    //another way to select first title
    // var test = $('span.comhead').prev().first().text();

    //is javascript in the selected title
    var newsHasJavascript = newsTitle.match('javascript');


    if (!newsHasJavascript) {
      // request python.org, return something fun
      var pythonUrl = 'https://python.org';
      var pythonHtml = request(pythonUrl, function (err, response, html){

        // console.log(html);
        //parse html
        var $ = cheerio.load(html);
        //one way to select first title
        var pythonLogo = $('img').attr('src');
        res.send('<img src="https://python.org'+pythonLogo+'">');

       });

    } else {
      // request reddit, parse, test if javascript it part of the title

       //ajax request for reddit
      var redditUrl = 'https://www.reddit.com/r/Web_Development/';
      var redditHtml = request(redditUrl, function (err, response, html){

        // console.log(html);
        //parse html
        var $ = cheerio.load(html);
        //one way to select first title
        var redditTitle = $('a.title').first().text();
        console.log(redditTitle);

        //another way to select first title
        // var test = $('span.comhead').prev().first().text();

        //is javascript in the selected title
        var redditHasJavascript = redditTtle.match('javascript');
        console.log(redditHasJavascript, "console log right here");

      //if yes
        //request mdn, return something fun


      //if no

        //request python.org, return something fun
    });

    }


    res.send("hi");

  });




});


// request('https://news.ycombinator.com/', function (error, response, html) {

//     if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var title = $('span.comhead').prev().first().text();
//     console.log(title, "title");
//   }
// });

// request('https://www.reddit.com/r/Web_Development/', function (error, response, html) {

//     if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var title = $('span.comhead').prev().first().text();
//     console.log(title, "title");
//   }
// });






module.exports = router;
