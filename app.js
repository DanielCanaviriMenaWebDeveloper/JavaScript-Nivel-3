let express = require('express');
let app = express();

app.get('/', function functionName(req, res) {
    res.send('Hola mundo!!!');
});

app.listen(3000, function() {
        console.log('Aplicación corriendo');
    });
/* Concatenación en ES5 */

let nombre = "Daniel Alberto";
let apellido = "Canaviri Mena";
let edad = 37

console.log("Hola soy " + nombre + " " + apellido + " tengo " + edad + " años.");

/* Template Literals en ES6 */

let nombre = "Daniel Alberto";
let apellido = "Canaviri Mena";
let edad = 37;

console.log(`Hola soy ${nombre} ${apellido} tengo ${edad} años.`);

/* Valores por defecto en ES5 */

function parametros (nombre, apellido, edad) {
    var nombre = nombre || "Carlos";
    var apellido = apellido || "Suarez";
    var edad = edad || 23;
    console.log(nombre, apellido, edad);
}

parametros("Daniela", "Almeida", 26);
parametros();

/* Parametros por defecto con ES6 */

function parametros(nombre = "Edgar", apellido = "Tarquino", edad = 33) {
	var nombre = nombre;
	var apellido = apellido;
	var edad = edad;
	console.log(nombre, apellido, edad);
}

parametros("Daniela", "Gonzales", 22);
parametros();

/* Multilineas en ES5 */

let frase1 = "Este mundo lleno de programadores\n";
let frase2 = "Que alegria es vivir en este mundo\n";
let frase3 = "Recuerden lo mas valioso es el tiempo";

console.log(frase1, frase2, frase3);

/* Multilineas en ES6 con template string*/

let frase1 = "Este mundo lleno de programadores";
let frase2 = "Que alegria es vivir en este mundo";
let frase3 = "Recuerden lo mas valioso es el tiempo";

console.log(`
"${frase1}
 ${frase2}
 ${frase3}"
`);






