var fs = require('fs');
var  request = require("request");

var file =  fs.createWriteStream("miha.jpg");
request('https://pbs.twimg.com/profile_images/870748901174910978/mh3S-VRD.jpg').pipe(file);

file.on('finish', function(){
    console.log('Okay, this is woolf');
});