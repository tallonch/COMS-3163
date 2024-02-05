function removeNegativeFromArray (array) {
    let positiveArray = [];
    array.forEach(element => {
        if (element >= 0) {
            positiveArray.push(element);
        }
        console.log(positiveArray);
    });
    console.log("Positive Array");
    console.log(positiveArray);
}

const numArray = [5, 7, 8, -9, 9, -3, 0,];

removeNegativeFromArray(numArray);