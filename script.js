function calculatePercentage() {
    let obtained = Number(document.getElementById("obtained").value);
    let total = Number(document.getElementById("total").value);

    if (!obtained || !total || total <= 0) {
        document.getElementById("result").innerText =
            "Please enter valid marks.";
        return;
    }

    let percentage = (obtained / total) * 100;

    document.getElementById("result").innerText =
        "Your Percentage: " + percentage.toFixed(2) + "%";
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
            alert("Study session complete!");
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

updateTimer();
function calculateGrade() {
    let marks = Number(document.getElementById("gradeMarks").value);

    if (marks < 0 || marks > 100 || isNaN(marks)) {
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
    } else {
        grade = "Needs Improvement";
    }

    document.getElementById("gradeResult").innerText =
        "Your Grade: " + grade;
}
function addPlan() {
    let subject = document.getElementById("subject").value;
    let hours = document.getElementById("hours").value;

    if (subject.trim() === "" || hours === "") {
        alert("Please enter subject and study hours.");
        return;
    }

    let plan = document.createElement("p");

    plan.innerText = "📖 " + subject + " — " + hours + " hours";

    document.getElementById("planList").appendChild(plan);

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
}