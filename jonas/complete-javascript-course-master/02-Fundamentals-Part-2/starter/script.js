"use strict";

const calcAverage = (a, b, c) => (a + b + c) /3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Los Delfines han ganado con un score de ${avgDolphins}`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Los Koalas han ganado con un score de ${avgKoalas}`);
    }else {
        console.log(`No hay ningun ganador los Delfines obtuvieron un score de ${avgDolphins},
    mientras que los Koalas obtuvieron un score de ${avgKoalas}`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);