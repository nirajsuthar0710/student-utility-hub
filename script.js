function showMessage() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// Percentage Calculator
// =========================
function calculatePercentage() {
    const obtained = parseFloat(document.getElementById("obtained").value);
    const total = parseFloat(document.getElementById("total").value);
    const result = document.getElementById("result");

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
        "Your Percentage: " + percentage.toFixed(2) + "%";
}


// =========================
// Grade Calculator
// =========================
function calculateGrade() {
    const percentage =
        parseFloat(document.getElementById("gradeMarks").value);

    const result = document.getElementById("gradeResult");

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

    result.innerText = "Your Grade: " + grade;
}


// =========================
// CGPA Calculator
// =========================
// CGPA Calculator
// =========================
// CGPA Calculator
// =========================
function calculateCGPA() {

    const input = document.getElementById("cgpaInput");
    const result = document.getElementById("cgpaResult");

    const cgpa = parseFloat(input.value);

    if (isNaN(cgpa)) {
        result.innerText = "Please enter your CGPA.";
        return;
    }

    if (cgpa < 0 || cgpa > 10) {
        result.innerText = "CGPA must be between 0 and 10.";
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

    const difference = examDate - today;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
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
// Study Planner
// =========================
function addPlan() {
    const subject = document.getElementById("subject").value.trim();
    const hours = parseFloat(document.getElementById("hours").value);
    const planList = document.getElementById("planList");

    if (!subject || isNaN(hours) || hours <= 0) {
        alert("Please enter subject and valid study hours.");
        return;
    }

    const plan = document.createElement("div");

    plan.style.marginTop = "10px";
    plan.style.padding = "12px";
    plan.style.background = "#eff6ff";
    plan.style.borderRadius = "8px";
    plan.style.display = "flex";
    plan.style.justifyContent = "space-between";
    plan.style.alignItems = "center";
    plan.style.gap = "10px";

    const text = document.createElement("span");

    text.innerText =
        "📚 " + subject + " — " + hours + " hour(s)";

    const deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.onclick = function () {
        plan.remove();
        updateTotalHours();
    };

    plan.appendChild(text);
    plan.appendChild(deleteButton);

    planList.appendChild(plan);

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";

    updateTotalHours();
}


function updateTotalHours() {
    const plans = document.querySelectorAll("#planList > div");

    let total = 0;

    plans.forEach(function (plan) {
        const text = plan.innerText;

        const match = text.match(/—\s*([\d.]+)\s*hour/);

        if (match) {
            total += parseFloat(match[1]);
        }
    });

    const totalHours = document.getElementById("totalHours");

    if (totalHours) {
        totalHours.innerText =
            "Total Study Hours: " + total.toFixed(2);
    }
}

// =========================
// Study Timer
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
    if (timerInterval !== null) return;

    timerInterval = setInterval(function () {

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
// Quick Notes
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
// Start Page
// =========================
document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateTimer();

        const savedNote =
            localStorage.getItem(
                "studentUtilityNote"
            );

        if (savedNote) {
            document.getElementById(
                "noteText"
            ).value = savedNote;
        }
    }
);
// =========================
// DARK / LIGHT MODE
// =========================

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeToggle");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
        localStorage.setItem("darkMode", "on");
    } else {
        button.textContent = "🌙 Dark Mode";
        localStorage.setItem("darkMode", "off");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    updateTimer();

    const savedNote = localStorage.getItem("studentUtilityNote");

    if (savedNote) {
        document.getElementById("noteText").value = savedNote;
    }

    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark-mode");

        const button = document.getElementById("themeToggle");

        if (button) {
            button.textContent = "☀️ Light Mode";
        }
    }
});
