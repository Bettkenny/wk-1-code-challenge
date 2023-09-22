// my code for challenge 1 grading
function generateStudentGrade() {
    const marks = ("Enter student marks (between 0 and 100):");
    if ( marks < 0 || marks > 100) {
      return "Invalid input";
    } else if (marks> 79) {
      return "A";
    } else if (marks >= 60 && marks<= 79) {
      return "B";
    } else if (marks >= 50 && marks <=69) {
      return "C";
    } else if (marks >= 40 && marks <=59) {
      return "D";
    } else if (marks > 0 && marks <=39) {
      return "E";
    }
}