// arguments object no longer bound






// this keyword - no longer bound

// const user = {
//     name: 'Edyta',
//     cities: ['Krakow', 'Brighton', 'Portsmouth', 'London'],
//     printPlacesLived() {
//         this.cities.forEach( (city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();


// map - you can transform each item, get a new array back

const user = {
    name: 'Edyta',
    cities: ['Krakow', 'Brighton', 'Portsmouth', 'London'],
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [5,5,6,4,3,2],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map( (number) => 'I am multiplying ' + number + ' by ' + this.multiplyBy + ' and result is ' + number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
