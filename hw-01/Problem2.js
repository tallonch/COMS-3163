function sumArray (array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
        console.log(sum);
    });
}

const numArray = [5, 7, 8, 9, 0];

sumArray(numArray);