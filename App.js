const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cookieParser());

app.listen(port, () =>
	console.log(`Express server is listening on port ${port}`)
);

app.get('/login', (req, res) => {
	res.cookie('name', 'Will');
	res.status(200).send('Access Granted!');
});

app.get('/hello', (req, res) => {
	if ('Name' in req.cookies) {
		if (req.cookies.name === 'Will') {
			res.status(200).send(`Hello Will!`);
		}
	}
});
