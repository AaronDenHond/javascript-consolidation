/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //On the click to the button, get the birthdate of the visitor and display his/her age.
    //click,so addeventlistener
    // input values of day month year, so .value


    document.getElementById("run").addEventListener("click", function () {

        let dobDay = document.getElementById("dob-day").value;
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;
        let today = new Date();
        let dayOfBirth = new Date(dobYear, dobMonth, dobDay);
         // calculate age
        // todayinmillisecs - bdayinmillisecs = age
        let ageInMilliSecs = today.getTime() - dayOfBirth.getTime();
        // milliseconds to hours
        let age = Math.floor(ageInMilliSecs / (1000 * 60 * 60 * 24 * 365))

        console.log(age);

        alert(dayOfBirth);
        

    });
          
})();
