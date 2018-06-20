// const square = function (x) {
//     return x * x;
// };

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrow = (x) => { x * x};

// console.log(squareArrow(8));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Edyta Wrobel'));
console.log(getLastName('Edyta Wrobel'));