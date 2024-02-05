function productOfArray (array) {
    let product = 1;
    array.forEach(element => {
        product *= element;
        console.log(product);
    });
}

const numArray = [5, 7, 8, 9, 9];

productOfArray(numArray);