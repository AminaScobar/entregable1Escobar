let ingles = "en";
let espanol = "es";
let nombreCliente;

function qIdiomaHablas () {

   let idioma = prompt("Bienvenido al cotizador automático del taller automotriz Gonzalez, si hablas español, digita ES. / Welcome to the Gonzalez auto shop automatic quote, if you speak English, type EN.").toLowerCase()
   if (idioma === ingles) {
      alert("At this time, we cannot offer you our automatic quote services, but you can write us your concerns to the following email: gtaller@gmail.com");
      return;

   }  else if (idioma === espanol) {
      nombreCliente = prompt("Por favor, digita tu nombre").toLocaleUpperCase();

   } else {
      alert("Idioma no reconocido");
      return;

   };
}

qIdiomaHablas ()

let ofrecerProductoUno = "hola " + nombreCliente + " ingresa el código segun el servicio a cotizar: \nCambio de aceite motor, código: CAM.\nCambio de aceite transmisión, código: CAT.\nCambio de frenos, código: CF.\ncambio de bujias, código: CB.\nningun otro producto, código: NO.";
let ofrecerProductoOtros = nombreCliente + " ¿quieres cotizar otro producto? ingresa el código segun el servicio a cotizar: \nCambio de aceite motor, código: CAM.\nCambio de aceite transmisión, código: CAT.\nCambio de frenos, código: CF.\ncambio de bujias, código: CB.\nningun otro producto, código: NO.";
let preguntas = [ ofrecerProductoUno, ofrecerProductoOtros, ofrecerProductoOtros, ofrecerProductoOtros ];

const codigoProductos = ["cam", "cat", "cf", "cf", "no"]
const preciosProductos = [40, 100, 50, 60, 0]
let precioProductoUno = 0;
let precioProductoDos = 0;
let precioProductoTres = 0;
let precioProductoCuatro = 0;

let precios = [];
let productosSeleccionados = [];

function obtenerProductos() {   
    for (let i = 0; i < preguntas.length; i++) {
        let producto = prompt(preguntas[i]).toLowerCase();
        productosSeleccionados.push(producto);

        if (producto === "no" ) {
            break;
        }

        let indexProducto = codigoProductos.indexOf(producto);

        if (indexProducto !== -1) {
            precios.push(preciosProductos[indexProducto]);

        } else {
            alert("Escogiste un código que no existe");
            precios.push(0);  
        }
    }

    while (precios.length < 4) {
           precios.push(0);
    }

    [precioProductoUno, precioProductoDos, precioProductoTres, precioProductoCuatro] = precios;

}

obtenerProductos()

function sumaPreciosProductos() {
    let total = precioProductoUno + precioProductoDos + precioProductoTres + precioProductoCuatro 
    let resultado = confirm(nombreCliente + ", el total de tu cotización es: $" + parseInt(total) )
}

sumaPreciosProductos()