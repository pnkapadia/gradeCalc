

function check() {
var weightNum1 = document.quiz.weight1.value;
    var weightNum2 = document.quiz.weight2.value;
    var weightNum3 = document.quiz.weight3.value;
    var weightNum4 = document.quiz.weight4.value;
    var weightNum5 = document.quiz.weight5.value;

    var gradeNum1 = document.quiz.grade1.value;
    var gradeNum2 = document.quiz.grade2.value;
    var gradeNum3 = document.quiz.grade3.value;
    var gradeNum4 = document.quiz.grade4.value;
    var gradeNum5 = document.quiz.grade5.value;

    var resultWeight = 0;
    var avgGrade = 0;
        
    resultWeight = parseInt(weightNum1) + parseInt(weightNum2) + parseInt(weightNum3) + parseInt(weightNum4) + parseInt(weightNum5);
    avgGrade = ((gradeNum1*(weightNum1/100)) + (gradeNum2*(weightNum2/100)) + (gradeNum3*(weightNum3/100)) + (gradeNum4*(weightNum4/100)) + (gradeNum5*(weightNum5/100)));    

    if(resultWeight > 100) {
        alert("Total weight must be less than 100! Please try again.");
    } else {
        document.getElementById("quiz").innerHTML = "";
        var v = document.getElementById("after_submit");
        var button = document.createElement("button");
        var p = document.createElement("p");
        var d = document.getElementById("result");
        var g = document.createElement("p");

        p.style.fontSize = '18px';
        g.style.fontSize = '18px';
        v.style.fontSize = '18px';

        var page = "";
		page += '<table id="myTable"">';
    	page += '<tr>';
    	page += '<th>Assignment</th>';
    	page += '<th>Grade</th>';
    	page += '<th>Weight/Percent</th>';
        page += '</tr>';
        
    	page += '<tr id="someRow">';
		page += '<td class="count"></td>';
		page += '<td>' + gradeNum1 + '</td>';
		page += '<td>' + weightNum1 + '</td>';
        page += '</tr>';
        
        page += '<tr id="someRow">';
		page += '<td class="count"></td>';
		page += '<td>' + gradeNum2 + '</td>';
		page += '<td>' + weightNum2 + '</td>';
        page += '</tr>';
        
        page += '<tr id="someRow">';
		page += '<td class="count"></td>';
		page += '<td>' + gradeNum3 + '</td>';
		page += '<td>' + weightNum3 + '</td>';
        page += '</tr>';
        
        page += '<tr id="someRow">';
		page += '<td class="count"></td>';
		page += '<td>' + gradeNum4 + '</td>';
		page += '<td>' + weightNum4 + '</td>';
        page += '</tr>';
        
        page += '<tr id="someRow">';
		page += '<td class="count"></td>';
		page += '<td>' + gradeNum5 + '</td>';
		page += '<td>' + weightNum5 + '</td>';
		page += '</tr>';

        p.innerHTML = "These are the grades you entered: " + "\n";
        button.innerHTML = "Go Back!" + "\n";
        v.style.visibility = "visible";
        v.innerHTML = "\n" + "\n" + "The average grade entered is: " + avgGrade.toFixed(2) + "." + "\n" + "The total percentage is: " + resultWeight + ".";
        d.innerHTML = page + "\n";

        document.getElementById("quiz").appendChild(p);
        document.getElementById("quiz").appendChild(d);
        document.getElementById("quiz").appendChild(v);

        if (avgGrade >= 90 && avgGrade <= 100) {
            g.innerHTML = "Your final grade is A+ and GPA is 4.33";
            document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 85 && avgGrade <= 89) {
               g.innerHTML = "Your final grade is A and GPA is 4.00";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 80 && avgGrade <= 84) {
               g.innerHTML = "Your final grade is A- and GPA is 3.67";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 77 && avgGrade <= 79) {
               g.innerHTML = "Your final grade is B+ and GPA is 3.33";
               document.getElementById("quiz").appendChild(g);
           }  else if (avgGrade >= 73 && avgGrade <= 76) {
               g.innerHTML = "Your final grade is B and GPA is 3.00";
               document.getElementById("quiz").appendChild(g);
           }  else if (avgGrade >= 70 && avgGrade <= 72) {
               g.innerHTML = "Your final grade is B- and GPA is 2.67";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 67 && avgGrade <= 69) {
               g.innerHTML = "Your final grade is C+ and GPA is 2.33";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 63 && avgGrade <= 66) {
               g.innerHTML = "Your final grade is C and GPA is 2.00";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 60 && avgGrade <= 62) {
               g.innerHTML = "Your final grade is C- and GPA is 1.67";
               document.getElementById("quiz").appendChild(g);
           } else if (avgGrade >= 57 && avgGrade <= 59) {
               g.innerHTML = "Your final grade is D+ and GPA is 1.33";
               document.getElementById("quiz").appendChild(g);
           }  else if (avgGrade >= 53 && avgGrade <= 56) {
               g.innerHTML = "Your final grade is D and GPA is 1.00";
               document.getElementById("quiz").appendChild(g);
           }  else if (avgGrade >= 50 && avgGrade <= 52) {
               g.innerHTML = "Your final grade is D- and GPA is 0.67";
               document.getElementById("quiz").appendChild(g);
           } else {
               g.innerHTML = "Your final grade is F.";
               document.getElementById("quiz").appendChild(g);
           }

        document.getElementById("quiz").appendChild(button);

        
        
        
    }

}

function reset() {
    var x;
    x= document.getElementById("after_submit");
    if(x=="") {
        return false;
    }
}








/*
var num = 6;

function addGrade() {

    var table1 = document.getElementById("myTable");
    var rowCount = table1.rows.length;

    if (rowCount <= 10) {
        var row = table1.insertRow(rowCount);
        //var colCount = table1.rows[1].cells.length;
        var colCount;
        row.id = "grade" + rowCount;
        
        for(var i=0, colCount=table1.rows[i].cells.length; i < colCount; i++) {
            var newCell = row.insertCell(i);

            newCell.innerHTML = table1.rows[5].cells[i].innerHTML; 

        }
       
      
    } else {
        alert("Can't add more than 10 grade or weights.");

    }

} onclick="addGrade()"
*/
