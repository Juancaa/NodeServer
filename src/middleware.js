
module.exports.useMiddleware = (app, express) => {


	//app.use(express.static(__dirname +'/static'))

	app.use((req, res, next) => {
		console.log(`NEW REQ: ${req.url}`)
		next()
	})

	app.use(express.static(__dirname + '/static'))


}

