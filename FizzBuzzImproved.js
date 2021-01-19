function fizzBuzz(number) {
const numberArray = []
for (let i = 1; numberArray.length < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numberArray.push('FizzBuzz')
    } else if (i % 5 === 0) {
        numberArray.push('Buzz')
    } else if (i % 3 === 0) {
        numberArray.push('Fizz')
    } else numberArray.push(i);
    }
    console.log(numberArray);
}

fizzBuzz(15)