function gradeCalc(score){
    if (typeof score !== "number" || score < 0 || score > 100) {
        grade = "invalid";
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    switch (grade) {
        case "A":
            console.log("Grade A");
            break;
        case "B":
            console.log("Grade B");
            break;
        case "C":
            console.log("Grade C");
            break;
        case "D":
            console.log("Grade D");
            break;
        case "F":
            console.log("Score not sufficient to Grade");
            break;
        default:
            console.log("Invalid score input");
    }

}

gradeCalc(100);// Grade A
// gradeCalc(92);  // Grade A
// gradeCalc(85);  // Grade B
// gradeCalc(73);  // Grade C
// gradeCalc(65);  // Grade D
// gradeCalc(40);  // Score not sufficient to Grade
// gradeCalc("a"); // Invalid input

