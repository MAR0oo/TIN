function operation(numArr, operations) {
    let result = [];
    for (let numArrElement of numArr) {
        result.push(operations(numArrElement));
    }
    console.log(result);
}

function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

operation(numbers, square);
operation(numbers, double);