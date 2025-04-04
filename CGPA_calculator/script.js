document.querySelectorAll(".box_color").forEach((button) => {
  button.addEventListener("click", function () {
      let semId = this.textContent.trim().toLowerCase().replace(" ", "");
      let semContent = document.getElementById(semId);

      console.log(`Clicked: ${semId} - Switching to this semester view.`);

      if (semContent) {
          document.querySelector(".semester").style.display = "none";
          document.querySelectorAll(".sem-content").forEach(content => content.style.display = "none");
          semContent.style.display = "block";
      } else {
          console.warn(`No semester content found with ID: ${semId}`);
      }
  });
});

function calculatePointer() {
  let visibleSem = Array.from(document.querySelectorAll('.sem-content')).find(sem => sem.style.display === 'block');
  if (!visibleSem) {
      console.warn("No semester is currently visible.");
      return;
  }

  let semId = visibleSem.id;
  console.log(`Calculating pointer for: ${semId}`);

  let inputs = visibleSem.querySelectorAll(`.marks-input.${semId}marks`);
  
  let totalCredits = 0;
  let totalGradePoints = 0;

  inputs.forEach((input, index) => {
      let marks = parseFloat(input.value) || 0;
      let fullMarks = parseFloat(input.getAttribute("fullmarks")) || 0;
      let credits = parseFloat(input.getAttribute("data-credits")) || 0;

      if (fullMarks === 0 || credits === 0) {
          console.warn(`Subject ${index + 1} skipped due to invalid fullMarks or credits.`);
          return;
      }

      let percentage = (marks / fullMarks) * 100;
      let gradePoint =
          percentage >= 90 ? 10 :
          percentage >= 80 ? 9 :
          percentage >= 70 ? 8 :
          percentage >= 60 ? 7 :
          percentage >= 55 ? 6 :
          percentage >= 50 ? 5 :
          percentage >= 40 ? 4 : 0;

      console.log(`Subject ${index + 1}: Marks = ${marks}, Full Marks = ${fullMarks}, Credits = ${credits}, Percentage = ${percentage.toFixed(2)}%, Grade Point = ${gradePoint}`);

      totalGradePoints += gradePoint * credits;
      totalCredits += credits;
  });

  let pointer = totalCredits === 0 ? 0 : (totalGradePoints / totalCredits).toFixed(2);
  console.log(`Total Grade Points = ${totalGradePoints}, Total Credits = ${totalCredits}, Final Pointer = ${pointer}`);

  document.getElementById(`result${semId}`).innerText = "Your Pointer: " + pointer;
}

function goBack() {
  console.log("Going back to semester list.");
  document.querySelector(".semester").style.display = "grid";
  document.querySelectorAll(".sem-content").forEach(content => content.style.display = "none");
}
