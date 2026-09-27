// EXPLORE TOOLS
function showMessage() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}


// PERCENTAGE CALCULATOR
function calculatePercentage() {
    let obtained = Number(document.getElementById("obtained").value);
    let total = Number(document.getElementById("total").value);

    if (isNaN(obtained) || isNaN(total) || total <= 0 || obtained < 0 || obtained > total) {
        document.getElementById("result").innerText =
            "Please enter valid marks.";
        return;
    }

    let percentage = (obtained / total) * 100;

    document.getElementById("result").innerText =
        "Your Percentage: " + percentage.toFixed(2) + "%";
}


// GRADE CALCULATOR
function calculateGrade() {
    let marks = Number(document.getElementById("gradeMarks").value);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("gradeResult").innerText =
            "Please enter percentage between 0 and 100.";
        return;
    }

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else if (marks >= 33) {
        grade = "E";
    } else {
        grade = "F";
    }

    document.getElementById("gradeResult").innerText =
        "Your Grade: " + grade;
}


// CGPA CALCULATOR
function calculateCGPA() {
    let cgpa = Number(document.getElementById("cgpa").value);

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        document.getElementById("cgpaResult").innerText =
            "Please enter CGPA between 0 and 10.";
        return;
    }

    let percentage = cgpa * 9.5;

    document.getElementById("cgpaResult").innerText =
        "Approx. Percentage: " + percentage.toFixed(2) + "%";
}


// EXAM COUNTDOWN
function calculateCountdown() {
    let examDate = document.getElementById("examDate").value;

    if (examDate === "") {
        document.getElementById("countdownResult").innerText =
            "Please select your exam date.";
        return;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let exam = new Date(examDate + "T00:00:00");

    let difference = exam - today;
    let days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days > 0) {
        document.getElementById("countdownResult").innerText =
            days + " days left 📚";
    } else if (days === 0) {
        document.getElementById("countdownResult").innerText =
            "Your exam is today! 🎯";
    } else {
        document.getElementById("countdownResult").innerText =
            "This exam date has passed.";
    }
}


// STUDY PLANNER
function addPlan() {
    let subject = document.getElementById("subject").value;
    let hours = document.getElementById("hours").value;

    if (subject.trim() === "" || hours === "") {
        alert("Please enter subject and study hours.");
        return;
    }

    let plan = document.createElement("p");

    plan.innerText =
        "📖 " + subject + " — " + hours + " hours";

    document.getElementById("planList").appendChild(plan);

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
}


// STUDY TIMER
let timeLeft = 25 * 60;
let timer = null;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("time").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Study session complete! 🎉");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateTimer();
}


// QUICK NOTES
function saveNote() {
    let note = document.getElementById("noteText").value;

    if (note.trim() === "") {
        document.getElementById("noteStatus").innerText =
            "Please write something first.";
        return;
    }

    localStorage.setItem("studentNote", note);

    document.getElementById("noteStatus").innerText =
        "Note saved successfully! ✅";
}


// START
updateTimer();
