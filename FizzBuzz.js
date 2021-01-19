
function hello() {
    console.log('Hello World!')
};

hello()

for (let i =1; i <= 255; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 13 === 0) {
        console.log('FizzFezzBuzzBang')
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) { 
        console.log('FizzBuzzBang')
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz') 
    } else if (i % 3 === 0 && i % 7 === 0) {
        console.log('FizzBang') 
    } else if (i % 5 === 0 && i % 7 === 0) {
        console.log('BuzzBang') 
    } else if ( i % 13 === 0 && i % 11 === 0) {
        console.log('FezzBong')
    } else if ( i % 13 === 0 && i % 3 === 0) {
        console.log('FizzFezz')
    } else if ( i % 13 && i % 5 === 0) {
        console.log('FezzBuzz')
    } else if (i % 13 === 0) {
        console.log('Fezz')
    } else if (i % 11 === 0) {
        console.log('Bong')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if ( i % 7 === 0) {
        console.log('Bang')
    } else {
        console.log(i)
    }
}

