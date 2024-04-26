const express = require('express');
const next = require('next');
const PORT = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
	.then(() => {
		const server = express();
		server.get('*', (req, res) => {
			return handle(req, res);
		});
		server.listen(PORT, e => {
			if (e) throw e;
			console.log(`Server is running localhost on port ${PORT}`);
		});
	})
	.catch(e => {
		console.log(e.stack);
		process.exit(1);
	});
