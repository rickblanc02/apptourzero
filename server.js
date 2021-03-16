const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(__dirname + '/venezuelabackpackers/dist/'));
app.use(express.static(__dirname, 'dist', {index: false}));

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

/*app.get('*', (req, res) => {
    res.sendFile(`./venezuelabackpackers/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});*/

/*app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/venezuelabackpackers/index.html'));});
*/

app.listen(process.env.PORT || 8080);

