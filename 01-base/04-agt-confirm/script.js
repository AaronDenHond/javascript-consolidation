/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //1. ask 3 questions with user input, so 3 prompts : age,gender,town check
    //2. display input in one dialogue box and ask to confirm : confirm box check
    //3. if not confirmed, rerun the whole process
    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("What town do you live in?");
    let answer = confirm("Is your age, " + age + ", is your gender " +  gender + " and do you live in " + town + "?"); 
   
   while (answer === false)
   prompt("What is your age?");
   prompt("What is your gender?");
   prompt("What town do you live in?");
   confirm("Is your age, " + age + ", is your gender " +  gender + " and do you live in " + town + "?"); 

 if (confirm("Is your age, " + age + ", is your gender " +  gender + " and do you live in " + town + "?")) {
     answer = true;
 }


})();
