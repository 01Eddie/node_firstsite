const express = require('express');
const app= express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
//Esto hace que se cambie la extension ejs a html
app.engine('html', require('ejs').renderFile);

app.set('views engine','ejs');

// Middlewares





// Routes --> request (req), response (res)
//Esto migrará a la carpeta routes
//
app.use(require('./routes/index'));

//app.get('/',(req,res) => {
//res.send('hello world');
//res.sendFile('G:/node-firstsite/src/views/index.html');
//console.log(__dirname + '/views/index.html');
//console.log(path.join(__dirname, 'views/index.html'));
//res.sendFile(path.join(__dirname, 'views/index.html'));
//res.render('index.ejs', {title: 'First web site'});
//});




// Static files

app.use(express.static(path.join(__dirname, 'public')))


// Listening this server
app.listen(app.set('port'), () => {
    console.log('Server on port ', app.set('port'));
});