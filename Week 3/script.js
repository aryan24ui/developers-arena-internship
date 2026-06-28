// Greeting Message
const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerText = "☀️ Good Morning!";
}
else if (hour < 18) {
    greeting.innerText = "🌤️ Good Afternoon!";
}
else {
    greeting.innerText = "🌙 Good Evening!";
}

// Skill Counter
const skills =
    document.querySelectorAll("#skills li");

document.getElementById("skillCount")
    .innerText = skills.length;


// Dark Mode
const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {
        themeBtn.innerText =
            "☀️ Light Mode";
    } else {
        themeBtn.innerText =
            "🌙 Dark Mode";
    }
});


// Show Hide About Section
const about =
    document.getElementById("about");

const toggleBtn =
    document.getElementById("toggleAbout");

toggleBtn.addEventListener("click", () => {

    if (about.style.display === "none") {
        about.style.display = "block";
        toggleBtn.innerText = "Hide About";
    } else {
        about.style.display = "none";
        toggleBtn.innerText = "Show About";
    }
});


// Form Validation
const form =
    document.querySelector("form");

const message =
    document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const msg =
        document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        msg === ""
    ) {
        message.style.color = "red";
        message.innerText =
            "Please fill all fields.";
        return;
    }

    if (!email.includes("@")) {
        message.style.color = "red";
        message.innerText =
            "Please enter a valid email.";
        return;
    }

    if (msg.length < 10) {
        message.style.color = "red";
        message.innerText =
            "Message must contain at least 10 characters.";
        return;
    }

    message.style.color = "green";
    message.innerText =
        "Message sent successfully!";

    form.reset();
});