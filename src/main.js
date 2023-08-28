const age = 24;
let message = `Вам ${age} `;

if (age % 10 === 1 && age % 100 !== 11) {
    message += "рік";
} else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
    message += "роки";
} else {
    message += "років";
}

console.log(message);
