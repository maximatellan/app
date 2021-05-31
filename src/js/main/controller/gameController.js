//gameController(){}


/*****************ROUTER*******************/
var express = require('express')
var router = express.Router()
var gameResolver = require('../model/gameResolver.js')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function(req, res){
	res.sendFile(__dirname+"/index.html")
})



//router.get('/game', gameGET)

router.post('/resolveGame', resolveGame)

//router.put('/game/:id', gamePUT)
/*****************ROUTER*******************/

module.exports = router


/*****************FUNCTIONS*******************/
/*
function gameGET(req, res){
	Game.find({}, function(err, game) {
	  if (err) throw err
	  console.log("/Game: "+JSON.stringify(game, null, 2))
	  res.json(game)
	})
}
*/

function resolveGame(req, res){
	//console.log(req)
	console.log("resolveGamePOST.JSON:")
	console.log(req.body)
	console.log("\n")
	var max = gameResolver(req.body.filas,req.body.columnas, req.body.sopadeletras)
	
	//console.log(req.body.filas)
	//console.log(req.body.columnas)
	//console.log(soup)
    var r = Math.floor(Math.random() * max)
    console.log("Respuestas: "+ r)
	var response = {success: true, response: r }
	res.json(response)
}
