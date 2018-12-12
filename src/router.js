
module.exports = (app) => {

	app.get('/sayhello/:name', (req, res) => res.send(`Hello ${req.params.name}`))


}
