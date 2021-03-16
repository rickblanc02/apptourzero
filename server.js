function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();

const path = require('path');

app.use(requireHTTPS);

app.use(express.static('./dist/venezuelabackpackers'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/venezuelabackpackers/'}),
);
/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/venezuelabackpackers/index.html'));    
});*/

/*app.get('/*', function(req,res){
    const fullPath = path.join(__dirname + '/dist/venezuelabackpackers/index.html');
    console.log(" Fetching from.." + fullPath);
      res.sendFile(fullPath);
  })*/

app.listen(process.env.PORT || 8080);