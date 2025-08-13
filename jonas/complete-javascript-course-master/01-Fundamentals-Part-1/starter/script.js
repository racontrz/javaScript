// const favorite = Number(prompt("What is your favorite number?"));
//
// console.log(typeof favorite);

// const day = prompt("Ingresa un dia de la semana");
//
// if (day === "lunes") {
//     console.log(`El dia ${day} es un exelente dia para estudiar`);
// }else if(day === "martes") {
//     console.log(`El dia ${day} es un exelente dia para estudiar`);
// }else if(day === "miercoles") {
//     console.log(`El dia ${day} es un exelente dia para estudiar`);
// }else if(day === "jueves") {
//     console.log(`El dia ${day} es un exelente dia para estudiar`);
// }else if(day === "viernes") {
//     console.log(`El dia ${day} es un exelente dia para estudiar`);
// }else if(day === "sabado") {
//     console.log(`El dia ${day} es para descanzar`);
// }else if(day === "domingo") {
//     console.log(`El dia ${day} es para dormir`);
// }else
//     console.log(`El dia ${day} no existe`);

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);