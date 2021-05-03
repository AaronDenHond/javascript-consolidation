/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // on CLICK of button, generate random color as background
    document.getElementById("run").addEventListener("click", function() {
        
        let randomColor = Math.floor(Math.random()*16777215).toString(16); // generate random color
        document.body.style.backgroundColor = "#" + randomColor;  //color value can be hexadecimal, aka # + 16 letters and numbers, here to string so all same type in value
         console.log(randomColor);
    });

})();
