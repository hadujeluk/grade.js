function gradeMarks(marks, grade){
    let marks = prompt ("input student's marks (0-100)")
    if (marks >= 79){
       const grade = 'A';
    }else if (marks >= 60){
       const grade = 'B';
    }else if (marks >= 49){
       const grade = 'C';
    }else if (marks >=40){
        const grade = 'D';
    }else if (marks < 40){
        grade = 'E'
    }
    console.log(marks , grade)



    










}