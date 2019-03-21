const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views';

app.use('/',router);

router.get('/hai', function(req, res){
    res.sendFile(path + '/index.html');
});

router.get('/product', function(req, res){
    res.sendFile(path + '/product.html');
});

router.get('/about', function(req, res){
    res.sendFile(path + '/about.html');
});

app.use('*', function(req, res){
    res.send('Error 404: Not Found');
});

app.listen(3000,function(){
    console.log('server running at Port 3000');
});