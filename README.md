# javascript-consolidation
Repo for redoing the Javascript introductory exercises.

The goal is to redo the exercises with as little online assistance as possible for better understanding.
CHAPTER 1 :

exercise 1 : easy, no issues

exercise 2 : easy, but confusion with 
let name = prompt("What is your name?");    
Not easy for me to understand the value here is the input from the user, not just the prompt message.
had to remove 1 line of prompts or I'd have double prompts

exercise 3 : no issues, solved with a simple if else. Only confusion was thinking I need a function
when using conditional statements, which apparently isn't the case.

exercise 4 : part 1 and 2 were solved easily, but rerunning the process was hard without looking it up.
didnt remember while loop and couldnt break the rerunning loop, had to look up the answer sadly.


CHAPTER 2 :

exercise 1 : easy, no issues other than using document.style.backgroundColor instead of document.body.style.Backgroundcolor

exercise 2 : went well, confused as to why color.value also worked, since i select a class then, not an id.

exercise 3 : had to look up how to generate random hexadecimal color (knew it was with math.random but didnt know exact values)

readme update 
 
CHAPTER 3 :

exercise 1 : went well, learned and looked up the difference between .innerHTML and .value in the DOM

exercise 2 : did it different this time, is this okay? Gotta check!
EDIT : doesnt work since getMinutes returns a value between 0 and 59, not counting mins from start of day.
let currentTime = new Date;
    //17h 30 mins = 17 x 60 + 30 = 1050 minutes
    function messageTest() { 
        if (currentTime.getMinutes() < 1050) {
            document.getElementById("target").innerHTML = "Hello";

        }
        
        else {

            document.getElementById("target").innerHTML = "Good evening";
        }

    }

   messageTest();

})();

exercise 3 : hard one, had to look up new Date () and possible parameters. 
Struggled cause I'd declared and assigned values to the variables outside of the function scope.
Took a long time, but did around 70 % without looking up.



   