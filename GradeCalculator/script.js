function calculate(){

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);
    
    let total = s1 + s2 + s3 + s4 + s5;
    let average = total / 5;

    document.getElementById("total").innerHTML = "Total Marks: " + total;
    document.getElementById("average").innerHTML = "Average: " + average;

    if(average >= 90){
        document.getElementById("grade").innerHTML = "Grade: A+";
        document.getElementById("grade").style.color = "green";
    }
    else if(average >= 75){
        document.getElementById("grade").innerHTML = "Grade: A";
    }
    else if(average >= 60){
        document.getElementById("grade").innerHTML = "Grade: B";
    }
    else if(average >= 50){
        document.getElementById("grade").innerHTML = "Grade: C";
    }
    else{
        document.getElementById("grade").innerHTML = "Grade: Fail";
        document.getElementById("grade").style.color = "red";
    }

}