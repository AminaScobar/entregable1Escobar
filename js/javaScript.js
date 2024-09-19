let ingles = "en";
let espanol = "es";

function cotizador() {

let idioma = prompt("Bienvenido al cotizador automático del taller automotriz Gonzalez, si hablas español, digita ES. / Welcome to the Gonzalez auto shop automatic quote, if you speak English, type EN.").toLowerCase()

let nombreCliente


   if (idioma === ingles) {
      alert("At this time, we cannot offer you our automatic quote services, but you can write us your concerns to the following email: gtaller@gmail.com");
      return;

   }  else if (idioma === espanol) {
      nombreCliente = prompt("Por favor, digita tu nombre").toLocaleUpperCase();

   } else {
      alert("Idioma no reconocido");
      return;

   }

const cambioAceiteMotor = {
    codigo: "cam",
    precio: 40
}

const cambioAceitetransmit = {
    codigo: "cat",
    precio: 100
}

const cambioFrenos = {
    codigo: "cf",
    precio: 50
}

const cambioBujias = {
    codigo: "cb",
    precio: 60
}

const codigoProductos = [cambioAceiteMotor.codigo, cambioAceitetransmit.codigo, cambioFrenos.codigo, cambioBujias.codigo, "nop"]
const preciosProductos = [cambioAceiteMotor.precio, cambioAceitetransmit.precio, cambioFrenos.precio, cambioBujias.precio, 0]

let ofrecerProductoUno = nombreCliente + " ingresa el código segun el servicio a cotizar: Cambio de aceite motor(código: CAM), cambio de aceite transmisión(código: CAT), cambio de frenos(código: CF), cambio de bujias(código: CB) y ningun otro producto(código: NOP)."
let ofrecerProductoOtros = nombreCliente + " ¿quieres cotizar otro producto? ingresa el código: Cambio de aceite motor(código: CAM), cambio de aceite transmisión(código: CAT), cambio de frenos(código: CF), cambio de bujias(código: CB) y ningun otro producto(código: NOP)."

let precioProductoUno = 0;
let precioProductoDos = 0;
let precioProductoTres = 0;
let precioProductoCuatro = 0;

function obtenerProductos() {
    let precios = [];

    let preguntas = [
        ofrecerProductoUno,
        ofrecerProductoOtros,
        ofrecerProductoOtros,
        ofrecerProductoOtros
    ];

    let productosSeleccionados = [];

    for (let i = 0; i < preguntas.length; i++) {
        let producto = prompt(preguntas[i]).toLowerCase();
        productosSeleccionados.push(producto);

        if (producto === "nop" ) {
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


function sumaPreciosProductos() {
    obtenerProductos()

    let total = precioProductoUno + precioProductoDos + precioProductoTres + precioProductoCuatro 
    let resultado = confirm(nombreCliente + ", el total de tu cotización es: $" + parseInt(total) )
}

sumaPreciosProductos()

}

cotizador()
