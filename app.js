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






