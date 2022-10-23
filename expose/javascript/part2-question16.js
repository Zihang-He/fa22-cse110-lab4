let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const typeCar in statistics){
    let odd = Math.floor(statistics[typeCar] / 2);
    if (typeCar[0] == 'r'){
        console.log(`${typeCar}`);
    }
    else if (2 * odd != statistics[typeCar]){
        console.log(`${typeCar}`);
    }
}