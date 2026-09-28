<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="Student Utility Hub - Free calculators, study timer, notes, planner and exam countdown tools for students.">

    <title>Student Utility Hub</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>

    <div class="brand">

        <div class="brand-icon">🎓</div>

        <div>
            <h1>Student<span>Utility</span></h1>
            <p>Plan • Learn • Grow</p>
        </div>

    </div>

    <nav>
        <a href="#home">Home</a>
        <a href="#tools">Tools</a>
        <a href="#notes">Notes</a>

        <button
            id="themeToggle"
            type="button"
            onclick="toggleTheme()">
            🌙 Dark Mode
        </button>
    </nav>

</header>


<main>

    <!-- HERO -->

    <section class="hero" id="home">

        <div class="hero-content">

            <span class="badge">
                📚 Made for Students
            </span>

            <h2>
                Study Smarter.<br>
                Achieve More. 🚀
            </h2>

            <p>
                Simple and useful tools to help students
                calculate, plan and study better.
            </p>

            <a href="#tools" class="hero-button">
                Explore Tools →
            </a>

        </div>

        <div class="hero-visual">
            🎓
            <span>📚</span>
            <span>✏️</span>
        </div>

    </section>


    <!-- TOOLS -->

    <section class="tools" id="tools">

        <h2>Our Tools</h2>

        <p class="section-subtitle">
            Everything you need for smarter study
        </p>

        <div class="tool-container">

            <!-- PERCENTAGE -->

            <div class="tool-card">

                <div class="tool-icon">
                    🧮
                </div>

                <h3>
                    Percentage Calculator
                </h3>

                <p>
                    Calculate your marks percentage
                    quickly and easily.
                </p>

                <a href="#percentage">
                    Open Tool →
                </a>

            </div>


            <!-- GRADE -->

            <div class="tool-card">

                <div class="tool-icon">
                    🎯
                </div>

                <h3>
                    Grade Calculator
                </h3>

                <p>
                    Find your grade from your
                    percentage.
                </p>

                <a href="#grade">
                    Open Tool →
                </a>

            </div>


            <!-- CGPA -->

            <div class="tool-card">

                <div class="tool-icon">
                    🎓
                </div>

                <h3>
                    CGPA Calculator
                </h3>

                <p>
                    Convert your CGPA into
                    approximate percentage.
                </p>

                <a href="#cgpa-section">
                    Open Tool →
                </a>

            </div>


            <!-- COUNTDOWN -->

            <div class="tool-card">

                <div class="tool-icon">
                    📅
                </div>

                <h3>
                    Exam Countdown
                </h3>

                <p>
                    Check how many days are
                    left for your exam.
                </p>

                <a href="#countdown">
                    Open Tool →
                </a>

            </div>


            <!-- PLANNER -->

            <div class="tool-card">

                <div class="tool-icon">
                    📚
                </div>

                <h3>
                    Study Planner
                </h3>

                <p>
                    Plan your subjects and
                    study hours.
                </p>

                <a href="#planner">
                    Open Tool →
                </a>

            </div>


            <!-- TIMER -->

            <div class="tool-card">

                <div class="tool-icon">
                    ⏱️
                </div>

                <h3>
                    Study Timer
                </h3>

                <p>
                    Focus on your studies with
                    a 25-minute timer.
                </p>

                <a href="#timer">
                    Open Tool →
                </a>

            </div>

        </div>

    </section>


    <!-- PERCENTAGE CALCULATOR -->

    <section class="calculator"
        id="percentage">

        <h2>
            🧮 Percentage Calculator
        </h2>

        <input
            type="number"
            id="obtained"
            placeholder="Marks Obtained">

        <input
            type="number"
            id="total"
            placeholder="Total Marks">

        <button
            type="button"
            onclick="calculatePercentage()">
            Calculate
        </button>

        <h3 id="result"></h3>

    </section>


    <!-- GRADE CALCULATOR -->

    <section class="calculator"
        id="grade">

        <h2>
            🎯 Grade Calculator
        </h2>

        <input
            type="number"
            id="gradeMarks"
            placeholder="Enter Percentage">

        <button
            type="button"
            onclick="calculateGrade()">
            Check Grade
        </button>

        <h3 id="gradeResult"></h3>

    </section>


    <!-- CGPA CALCULATOR -->

    <section class="calculator"
        id="cgpa-section">

        <h2>
            🎓 CGPA Calculator
        </h2>

        <input
            type="number"
            id="cgpaInput"
            min="0"
            max="10"
            step="0.01"
            placeholder="Enter CGPA">

        <button
            type="button"
            onclick="calculateCGPA()">
            Calculate Percentage
        </button>

        <h3 id="cgpaResult"></h3>

    </section>


    <!-- EXAM COUNTDOWN -->

    <section class="calculator"
        id="countdown">

        <h2>
            📅 Exam Countdown
        </h2>

        <input
            type="date"
            id="examDate">

        <button
            type="button"
            onclick="calculateCountdown()">
            Check Days Left
        </button>

        <h3 id="countdownResult"></h3>

    </section>


    <!-- STUDY PLANNER -->

    <section class="planner"
        id="planner">

        <h2>
            📚 Study Planner
        </h2>

        <input
            type="text"
            id="subject"
            placeholder="Enter Subject">

        <input
            type="number"
            id="hours"
            placeholder="Study Hours">

        <button
            type="button"
            onclick="addPlan()">
            Add Plan
        </button>

        <div id="planList"></div>

    </section>


    <!-- TIMER -->

    <section class="timer"
        id="timer">

        <h2>
            ⏱️ Study Timer
        </h2>

        <div id="time">
            25:00
        </div>

        <button
            type="button"
            onclick="startTimer()">
            Start
        </button>

        <button
            type="button"
            onclick="pauseTimer()">
            Pause
        </button>

        <button
            type="button"
            onclick="resetTimer()">
            Reset
        </button>

    </section>


    <!-- NOTES -->

    <section class="notes"
        id="notes">

        <h2>
            📝 Quick Notes
        </h2>

        <textarea
            id="noteText"
            placeholder="Write your notes..."></textarea>

        <button
            type="button"
            onclick="saveNote()">
            Save Note
        </button>

        <p id="noteStatus"></p>

    </section>

</main>


<!-- FOOTER -->

<footer>

    <div>
        <h3>
            🎓 StudentUtility
        </h3>

        <p>
            Plan • Learn • Grow
        </p>
    </div>

    <p>
        © 2026 Student Utility Hub
    </p>

    <p>
        Keep Going 🙂
    </p>

</footer>


<script src="script.js"></script>

</body>

</html>
