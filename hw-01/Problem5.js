function canDivideByTen (number) {
    console.log(number + " can be divided by 10");
    if (number % 10 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canDivideByTen(21));
console.log(canDivideByTen(100));
console.log(canDivideByTen(-10));
console.log(canDivideByTen(13));
console.log(canDivideByTen(50));
console.log(canDivideByTen(120));
console.log(canDivideByTen(57));