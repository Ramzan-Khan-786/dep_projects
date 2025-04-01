document.querySelectorAll(".box_color").forEach((button) => {
  button.addEventListener("click", function () {
      let semId = this.textContent.trim().toLowerCase().replace(" ", ""); 
      let semContent = document.getElementById(semId);

      if (semContent) {
          document.querySelector(".semester").style.display = "none"; 
          document.querySelectorAll(".sem-content").forEach(content => content.style.display = "none"); 
          semContent.style.display = "block"; 
      }
  });
});

function calculatePointer() {
  let inputs = document.querySelectorAll(".marks-input");
  let totalCredits = 0, totalGradePoints = 0;

  inputs.forEach((input) => {
      let marks = parseFloat(input.value) || 0;
      let fullMarks = parseFloat(input.getAttribute("fullmarks")) ||0;
      let percentage = (marks / fullMarks) * 100;
      let credits = parseFloat(input.getAttribute("data-credits")) || 0;
      let gradePoint = 
          percentage >= 90 ? 10 :
          percentage >= 80 ? 9 :
          percentage >= 70 ? 8 :
          percentage >= 60 ? 7 :
          percentage >= 55 ? 6 :
          percentage >= 50 ? 5 :
          percentage >= 40 ? 4 : 0;

      totalGradePoints += gradePoint * credits;
      totalCredits += credits;
  });

  let pointer = totalCredits === 0 ? 0 : (totalGradePoints / totalCredits).toFixed(2);
  document.getElementById("result").innerText = "Your Pointer: " + pointer;
}
function goBack() {
  document.querySelector(".semester").style.display = "grid"; // Show semester buttons
  document.querySelectorAll(".sem-content").forEach(content => content.style.display = "none"); // Hide all semester contents
}
