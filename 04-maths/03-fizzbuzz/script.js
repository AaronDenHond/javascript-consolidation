/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //between 1 and 100
    //3 conditions

    //let num = [];
    for (i = 1; i <= 100; i++)
     //   num.push(i);

    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        console.log("fizzbuzz");
    }
    else if (Number.isInteger(i / 3)) {
        console.log("fizz");
    }
    else if (Number.isInteger(i / 5)) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
})();
