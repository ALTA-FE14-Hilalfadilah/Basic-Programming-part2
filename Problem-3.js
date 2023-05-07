function Prima(n) {
    let count = 0;
    let number = 2;

    while (count < n) {
        let isprime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            count++;
        }
        number++;
    }
    return number - 1;
}

console.log(Prima(7));  //true
console.log(Prima(10)); //false

