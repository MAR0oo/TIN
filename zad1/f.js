function sumArray(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        let num = parseFloat(args[i]);
        if(isNaN(num)) {
            return `Podana wartość nie jest liczbą ${args[i]}`;
        }

        sum += num;
    }

    return sum;
}

console.log(sumArray(1, 2, 3));
console.log(sumArray(1.1, 2, 3));
console.log(sumArray(1.1, "2", 3));
console.log(sumArray(1.1, "2", "tekst"));