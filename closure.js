// If in a function we call another function. 
// and in the inside function a variable is updated which 
// variable initialize in the outside function.
// Than the inside function make a close environment for that variable.

function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

// clock1 has his own close environment. 
// That's why when we called clock2 the value of clock1 was still in preserved.
const clock1 = stopWatch();
console.log("clock1",clock1());
console.log("clock1",clock1());
console.log("clock1",clock1());
console.log("clock1",clock1());
const clock2 = stopWatch();
console.log("clock2",clock2());
console.log("clock2",clock2());
console.log("clock1",clock1());
console.log("clock2",clock2());
