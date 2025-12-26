const quotes = [
    "Student who codes more than he probably should.",
    "Backend-curious student with a soldering iron.",
    "I break things until they work (Student Edition).",
    "Learning code & electronics one tiny project at a time.",
    "Student exploring backend stuff and mysterious blinking circuits.",
    "Still a student, but already addicted to building things.",
    "Student interested in Backend & Infotronics (Yes, voluntarily).",
    "Trying to understand Backend & Electronics since 2019.",
    "Student tinkering with code and circuits in his free time.",
    "Free-time tinkerer in backend and infotronics.",
    "Building small things with code & electronics (Student)",
    "Exploring backend and infotronics as a student hobbyist",
    "Student + part-time code & circuit experimenter",
    "Learning how to make computers do stuff (Student)"
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("myTitle").innerText = quotes[randomIndex];
}

// show one random quote when page loads
window.onload = showRandomQuote;
