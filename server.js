var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('./public'));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./public/owner/index.html'))
})
app.listen(18080, function () {
    console.log('服务开始');
})