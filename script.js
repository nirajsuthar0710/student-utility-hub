function showMessage() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// Percentage Calculator
// =========================

function calculatePercentage() {
    const obtained =
        parseFloat(document.getElementById("obtained").value);

    const total =
        parseFloat(document.getElementById("total").value);

    const result =
        document.getElementById("result");

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained < 0 ||
        obtained > total
    ) {
        result.innerText = "Please enter valid marks.";
        return;
    }

    const percentage = (obtained / total) * 100;

    result.innerText =
        "Your Percentage: " +
        percentage.toFixed(2) +
        "%";
}


// =========================
// Grade Calculator
// =========================

function calculateGrade() {
    const percentage =
        parseFloat(document.getElementById("gradeMarks").value);

    const result =
        document.getElementById("gradeResult");

    if (
        isNaN(percentage) ||
        percentage < 0 ||
        percentage > 100
    ) {
        result.innerText =
            "Please enter percentage between 0 and 100.";
        return;
    }

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else if (percentage >= 33) {
        grade = "E";
    } else {
        grade = "F";
    }

    result.innerText =
        "Your Grade: " + grade;
}


// =========================
// CGPA Calculator
// =========================

function calculateCGPA() {

    const input =
        document.getElementById("cgpaInput");

    const result =
        document.getElementById("cgpaResult");

    const cgpa =
        parseFloat(input.value);

    if (isNaN(cgpa)) {
        result.innerText =
            "Please enter your CGPA.";
        return;
    }

    if (cgpa < 0 || cgpa > 10) {
        result.innerText =
            "CGPA must be between 0 and 10.";
        return;
    }

    const percentage = cgpa * 9.5;

    result.innerText =
        "Approx. Percentage: " +
        percentage.toFixed(2) +
        "%";
}


// =========================
// Exam Countdown
// =========================

function calculateCountdown() {

    const dateValue =
        document.getElementById("examDate").value;

    const result =
        document.getElementById("countdownResult");

    if (!dateValue) {
        result.innerText =
            "Please select your exam date.";
        return;
    }

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const examDate =
        new Date(dateValue + "T00:00:00");

    const difference =
        examDate - today;

    const days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );

    if (days > 0) {

        result.innerText =
            days + " days left 📚";

    } else if (days === 0) {

        result.innerText =
            "Your exam is today! 🎯";

    } else {

        result.innerText =
            "This exam date has passed.";
    }
}


// =========================
// STUDY PLANNER
// =========================
function displayPlans() {

    const planList = document.getElementById("planList");
    const totalHours = document.getElementById("totalHours");

    if (!planList) return;

    planList.innerHTML = "";

    const plans =
        JSON.parse(localStorage.getItem("studyPlans")) || [];

    let total = 0;
    let completed = 0;

    plans.forEach(function (plan, index) {

        const hours = Number(plan.hours);

        total += hours;

        if (plan.completed === true) {
            completed += hours;
        }

        const box = document.createElement("div");

        box.style.marginTop = "10px";
        box.style.padding = "12px";
        box.style.borderRadius = "8px";
        box.style.display = "flex";
        box.style.justifyContent = "space-between";
        box.style.alignItems = "center";
        box.style.gap = "10px";

        if (plan.completed === true) {
            box.style.background = "#dcfce7";
        } else {
            box.style.background = "#eff6ff";
        }

        const text = document.createElement("span");

        text.innerText =
            (plan.completed ? "✅ " : "📚 ") +
            plan.subject +
            " — " +
            hours +
            " hour(s)";

        const doneButton = document.createElement("button");

        doneButton.type = "button";

        doneButton.innerText =
            plan.completed ? "Undo" : "Done";

        doneButton.onclick = function () {

            plans[index].completed =
                !plans[index].completed;

            localStorage.setItem(
                "studyPlans",
                JSON.stringify(plans)
            );

            displayPlans();
        };


        const deleteButton = document.createElement("button");

        deleteButton.type = "button";
        deleteButton.innerText = "Delete";

        deleteButton.onclick = function () {

            plans.splice(index, 1);

            localStorage.setItem(
                "studyPlans",
                JSON.stringify(plans)
            );

            displayPlans();
        };


        const buttons = document.createElement("div");

        buttons.style.display = "flex";
        buttons.style.gap = "6px";

        buttons.appendChild(doneButton);
        buttons.appendChild(deleteButton);

        box.appendChild(text);
        box.appendChild(buttons);

        planList.appendChild(box);
    });


    const remaining = total - completed;


    if (totalHours) {

        totalHours.innerHTML =
            "📚 Total Hours: " +
            total.toFixed(2) +
            "<br>✅ Completed Hours: " +
            completed.toFixed(2) +
            "<br>⏳ Remaining Hours: " +
            remaining.toFixed(2);
    }
}
// =========================
// ADD STUDY PLAN
// =========================

function addPlan() {

    const subjectInput =
        document.getElementById("subject");

    const hoursInput =
        document.getElementById("hours");

    const subject =
        subjectInput.value.trim();

    const hours =
        parseFloat(hoursInput.value);

    if (!subject || isNaN(hours) || hours <= 0) {
        alert("Please enter subject and valid study hours.");
        return;
    }

    const plans =
        JSON.parse(localStorage.getItem("studyPlans")) || [];

    plans.push({
        subject: subject,
        hours: hours,
        completed: false
    });

    localStorage.setItem(
        "studyPlans",
        JSON.stringify(plans)
    );

    subjectInput.value = "";
    hoursInput.value = "";

    displayPlans();
}

// =========================
// DELETE STUDY PLAN
// =========================

function deletePlan(index) {

    const plans =
        JSON.parse(
            localStorage.getItem("studyPlans")
        ) || [];

    plans.splice(index, 1);

    localStorage.setItem(
        "studyPlans",
        JSON.stringify(plans)
    );

    displayPlans();
}


// =========================
// STUDY TIMER
// =========================

let timeLeft = 25 * 60;
let timerInterval = null;


function updateTimer() {

    const timeElement =
        document.getElementById("time");

    if (!timeElement) return;

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timeElement.innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    timerInterval =
        setInterval(function () {

            if (timeLeft > 0) {

                timeLeft--;

                updateTimer();

            } else {

                clearInterval(timerInterval);

                timerInterval = null;

                alert(
                    "Study session complete! 🎉"
                );
            }

        }, 1000);
}


function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timeLeft = 25 * 60;

    updateTimer();
}


// =========================
// QUICK NOTES
// =========================

function saveNote() {

    const noteText =
        document.getElementById("noteText");

    const status =
        document.getElementById("noteStatus");

    const note =
        noteText.value.trim();

    if (!note) {

        status.innerText =
            "Please write something first.";

        return;
    }

    localStorage.setItem(
        "studentUtilityNote",
        note
    );

    status.innerText =
        "Note saved successfully! ✅";
}


// =========================
// DARK / LIGHT MODE
// =========================

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );

    const button =
        document.getElementById(
            "themeToggle"
        );

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        button.textContent =
            "☀️ Light Mode";

        localStorage.setItem(
            "darkMode",
            "on"
        );

    } else {

        button.textContent =
            "🌙 Dark Mode";

        localStorage.setItem(
            "darkMode",
            "off"
        );
    }
}
// =========================
// FEEDBACK
// =========================

function sendFeedback() {

    const name =
        document.getElementById("feedbackName").value.trim();

    const feedback =
        document.getElementById("feedbackText").value.trim();

    const status =
        document.getElementById("feedbackStatus");

    if (!name || !feedback) {
        status.innerText =
            "Please enter your name and feedback.";
        return;
    }

    localStorage.setItem(
        "studentFeedback",
        JSON.stringify({
            name: name,
            feedback: feedback
        })
    );

    status.innerText =
        "Thank you for your feedback! ✅";

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackText").value = "";
}

// =========================
// PAGE START
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateTimer();

        displayPlans();


        // Load saved note

        const savedNote =
            localStorage.getItem(
                "studentUtilityNote"
            );

        if (savedNote) {

            document.getElementById(
                "noteText"
            ).value = savedNote;
        }


        // Load Dark Mode

        if (
            localStorage.getItem(
                "darkMode"
            ) === "on"
        ) {

            document.body.classList.add(
                "dark-mode"
            );

            const button =
                document.getElementById(
                    "themeToggle"
                );

            if (button) {

                button.textContent =
                    "☀️ Light Mode";
            }
        }

    }
);
function sendFeedback() {
    const name = document.getElementById("feedbackName").value.trim();
    const feedback = document.getElementById("feedbackText").value.trim();
    const status = document.getElementById("feedbackStatus");

    if (!name || !feedback) {
        status.innerText = "Please enter your name and feedback.";
        return;
    }

    status.innerText = "Thank you for your feedback! ✅";

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackText").value = "";
}
