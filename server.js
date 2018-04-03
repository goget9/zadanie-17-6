var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.use('/auth', express.static('assets'));

app.get('/', function (req, res) {
    res.render('front-view', {
    	desc: "Hi!, This is my first express project",
    	url: "/auth/google"
    });
});

app.get('/auth/google', function (req, res) {
	res.render('whole-world', {
		desc: "This is my whole world :)",
		imgSrc: "test.png"
	});
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});