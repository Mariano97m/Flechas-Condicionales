//Ejercicio 1: Conversor de Temperatura
 const ConversorDeTemperatura = (numero) => {
    return (numero * 9 / 5) + 32
 }

console.log(ConversorDeTemperatura(10));

//Ejercicio 2: Generador de Mensajes Personalizados

const Generador = (nombre, edad) => {
    return `Hola ${nombre} tienes ${edad} de edad`
}

console.log(Generador("Juan", 30));

//Ejercicio 3: Convertir de Millas a Kilómetros
const Kilometros = (millas) => {
    return millas*1.60934;
}
console.log(Kilometros(100));

//Ejercicio 4: Que llevar con el clima
const Clima = (parametro) => {
    return parametro === "soleado" ? "Llevate un sombrero que hace calorcito" : "Llevate un paraguas mejor"
}
console.log(Clima("soleado"));

