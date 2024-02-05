function convertToFahrenheit (celcius) {
    return (celcius * (9 / 5) + 32);
}

function convertToCelsius (fahrenheit) {
    return ((fahrenheit - 32) * (5 / 9));
}


console.log(convertToCelsius(27));
console.log(convertToFahrenheit(57));
console.log(convertToCelsius(89));
console.log(convertToFahrenheit(-7));