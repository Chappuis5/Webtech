// ./index.js
const url = require('url')
const qs = require('querystring')

const fs = require('fs')

module.exports = {
	serverHandle: function (req, res) {
		const route = url.parse(req.url)
		const path = route.pathname
		const params = qs.parse(route.query)

		switch(path){
			case '/':
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

				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(content)
				break
			case '/hello':
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
				console.log(Object.keys(people))
				res.writeHead(200, {'Content-Type': 'text/plain'});
				console.log(Object.keys(people).includes(params['name']))
				if('name' in params) {
					const key = params['name'].toLowerCase()
					if (Object.keys(people).includes(key))
						res.write(`Hello I'm ${people[key].fullName}! ${people[key].bio}`);
					else
						res.write(`Hello I am ${params['name']}`)
				} else {
					res.write('Hello anonymous!')
				}
				break;
			default:
				try {
					let data = fs.readFileSync(`./content${path}.json`, 'utf-8')
					res.writeHead(200, {'Content-Type': 'application/json'});
					res.write(data);
				} catch (e) {
					res.writeHead(200, {'Content-Type': 'text/plain'});
					res.write('Error 404! Page not found');
				}
		}
		res.end();
	}
}
