

function showMessage() {
    alert("Welcome to My Website! Thank you for visiting.");
}

function changeColor() {
    const colors = [
        "#1e3a8a",
        "#047857",
        "#7e22ce",
        "#be123c",
        "#c2410c"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.querySelector(".hero").style.background = randomColor;
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".dark-btn");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("response").textContent =
        "Thank you, " + name + "! Your message has been received.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    this.reset();
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
