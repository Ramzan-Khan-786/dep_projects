let semesterCount = 0;

function addSemester() {
    semesterCount++;

    const container = document.getElementById("inputsContainer");

    const div = document.createElement("div");
    div.innerHTML = `
        <h3>Semester ${semesterCount}</h3>
        SGPA: <input type="number" step="0.01" min="0" max="10" id="sgpa${semesterCount}" placeholder="e.g. 8.5">
        Credits: <input type="number" min="1" id="credits${semesterCount}" placeholder="e.g. 20">
    `;
    container.appendChild(div);

    console.log(`Semester ${semesterCount} input added.`);
}

function calculateCGPA() {
    let totalCredits = 0;
    let weightedSGPA = 0;

    for (let i = 1; i <= semesterCount; i++) {
        const sgpa = parseFloat(document.getElementById(`sgpa${i}`).value);
        const credits = parseFloat(document.getElementById(`credits${i}`).value);

        if (isNaN(sgpa) || isNaN(credits)) {
            console.warn(`Semester ${i} has invalid or missing data.`);
            continue;
        }

        console.log(`Semester ${i}: SGPA = ${sgpa}, Credits = ${credits}`);

        weightedSGPA += sgpa * credits;
        totalCredits += credits;
    }

    const cgpa = totalCredits === 0 ? 0 : (weightedSGPA / totalCredits).toFixed(2);

    document.getElementById("cgpaResult").innerText = `Your CGPA: ${cgpa}`;

    console.log(`Total Weighted SGPA: ${weightedSGPA}, Total Credits: ${totalCredits}, CGPA: ${cgpa}`);
}
