const number = 15;
let message = '';

if (number % 3 === 0) {
    message += 'Fizz';
}

if (number % 5 === 0) {
    message += 'Buzz';
}

console.log(message);
