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

