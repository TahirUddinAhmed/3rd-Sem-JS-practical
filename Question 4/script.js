// Write a program in JavaScript to enter marks of a student and find his/her grade according to the
// following: if marks>=90 then grade A if marks>=80 then grade B if marks>=70 then grade C if
// marks>=60 then grade D otherwise, fail.

let button = document.querySelector("#button");
console.log(button);

button.addEventListener('click', function() {
        let marks = document.getElementById("mark").value;
        let result = '';
        
        if(marks > 100) {
            result = "Invalid Marks";
        } else {
            if(marks >= 90){
                result = "Grade A";
                
            } else if(marks >= 80) {
                result = "Grade B";
            } else if(marks >= 70) {
                result = "Grade C";
            } else if(marks >= 60) {
                result = "Grade D"
            } else {
                result = "Fail";
            }
        }

        document.querySelector(".result").innerHTML = result;
});

