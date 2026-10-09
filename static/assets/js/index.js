const introLines = [
    "Still learning, still making.",
    "Curious about what happens under the surface.",
    "Trying to make small things work well.",
    "Learning backend, one project at a time.",
    "Code, circuits, and a lot of questions."
];

const intro = document.getElementById("myTitle");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".statement, .projects, .exploring, .site-footer")];
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const themeIcon = document.querySelector(".theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem("theme");

const setTheme = (theme) => {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeColor?.setAttribute("content", isLight ? "#f4f6f2" : "#0b0f14");
    themeToggle?.setAttribute("aria-pressed", String(isLight));
    themeToggle?.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
    if (themeLabel) themeLabel.textContent = isLight ? "Dark" : "Light";
    if (themeIcon) themeIcon.textContent = isLight ? "◐" : "☼";
};

if (intro) {
    intro.textContent = introLines[Math.floor(Math.random() * introLines.length)];
}

setTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
});

const updateActiveLink = () => {
    const current = sections.reduce((active, section) => {
        if (window.scrollY + 180 >= section.offsetTop) return section.id;
        return active;
    }, sections[0]?.id);

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => {
        item.classList.add("reveal");
        revealObserver.observe(item);
    });
}
