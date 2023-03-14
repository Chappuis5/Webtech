// ./index.js
const fs = require('fs')

const articles = require('./articles');

const router = require('express').Router()

router.use('/articles', articles)

router.get('/', (req, res) => {
	const content = '<!DOCTYPE html>' +
		'<html>' +
		'	<head>' +
		'		<meta charset="utf-8" />' +
		'		<title>Web Technologies project</title>' +
		'	</head>' +
		'<body>' +
		'	<h1>Web Technologies project</h1>' +
		'	<p>Maxime Pires & Evan Flament</p>' +
		'	<h2>Usage instructions</h2>' +
		'	<ul>' +
		'		<li>Access <a href="/hello">Hello page</a> to hello someone</li>' +
		'		<li>Specify the <code>name</code> query parameter</li>' +
		'		<li>Special messages for Maxime and Kevin</li>' +
		'		<li>Content pages: <a href="/about">About</a>, <a href="/test">Test</a></li>' +
		'	</ul>' +
		'</body>' +
		'</html>'

	res.send(content)
})

router.get('/hello', (req, res) => {
	if(req.query.name){
		const name = req.query.name.toLowerCase()

		const people = {
			'maxime': {
				fullName: 'Maxime',
				bio: "I'm a student at ECE, I love Linux!"
			},
			'evan': {
				fullName: 'Evan',
				bio: "I'm a student at ECE, I love cinema!"
			}
		};

		if(name in people)
			res.send(`Hello I'm ${people[name].fullName}! ${people[name].bio}`)
		else
			res.send(`Hello, ${name}!`)
	} else
		res.send('Hello, anonymous!')
})

router.get('/*', (req, res) => {
	try {
		let data = fs.readFileSync(`./content${req.path}.json`, 'utf-8')
		res.send(data)
	} catch (e) {
		res.send('Error 404! Page not found');
	}
})

module.exports = router