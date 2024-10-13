function checkAge (age) {
    if (age >= 18) {
        console.log("Pełnoletni");
    } else if (age < 18) {
        console.log("Nie pełnoletni");
    } else {
        console.log("Podana wartość nie jest liczbą");
    }
}

checkAge(18);
checkAge(17);
checkAge("dsa");