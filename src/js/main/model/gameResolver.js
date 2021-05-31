function resolve(x, y, z) { /*//console.log( x +"Hey!"+ y ); */return sopaDeLetrasInit(x,y,z)}

let SOPA_DE_LETRAS
let FILAS
let COLUMNAS
let VALUE_O = "O"
let VALUE_I = "I"
let VALUE_E = "E" 

//console.log("Setea las variables globales e inicializa la matriz")
function sopaDeLetrasInit(FILAS, COLUMNAS, sopaDeletras) {
	let soup = JSON.stringify(sopaDeletras)
	//console.log(soup)
	let logger = ""
	//console.log("Populate SOPA_DE_LETRAS")
	let soupaux = soup.split("");
	soupaux.shift()
	soupaux.pop()
	this.FILAS = FILAS
	this.COLUMNAS = COLUMNAS
	console.log("FILAS: "+this.FILAS)
	console.log("COLUMNAS: "+this.COLUMNAS)

	console.log("\nMATRIZ: \n")
	SOPA_DE_LETRAS = new Array(parseInt(FILAS));
	 for (var f = 0; f < SOPA_DE_LETRAS.length; f++) {
	 	logger = ""
	 	SOPA_DE_LETRAS[f] = new Array(parseInt(COLUMNAS));
	 	for (var c = 0; c < SOPA_DE_LETRAS[f].length;  c++) {
				SOPA_DE_LETRAS[f][c] = soupaux[0];
				 logger += SOPA_DE_LETRAS[f][c]
				soupaux.shift();
		 }
		 console.log(logger)
	}
		
	return checkOMatch()	

	/*reconocerO()
	O+1 = I ? ()=>agregoPosibleCamino(){O=[0,1] I=[0,2]}
	O.0 <= I.0 ?
	reconocerSiOmasunomenosuno
	*/
}

function checkOMatch(arrayDeLetras){
	console.log("Health: OK!")
	let positionsO = "" 
	for (var f = 0; f < SOPA_DE_LETRAS.length; f++) {
	 	logger = ""
	 	for (var c = 0; c < SOPA_DE_LETRAS[f].length;  c++) {
				if(SOPA_DE_LETRAS[f][c] ==  VALUE_O){
				 positionsO += f+":"+c+";"
				 //console.log("OK")
				}
		 }
		 //console.log(positionsO)
	}
	console.log("Posiciones 'O':")
	console.log(positionsO.split(";").length-1)
	return positionsO.split(";").length-1
}

const game = (x, y) => x + y

module.exports = resolve