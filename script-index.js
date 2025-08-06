// --- NEW: BACKGROUND MUSIC VOLUME CONTROL ---
// This code runs as soon as the page loads
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-song');
    if (audio) {
        // Set volume to 50% (0.5 is half of the max 1.0)
        audio.volume = 0.5;
    }
});


// --- COUNT-UP TIMER ---
// This is the date you first met.
const startDate = new Date("January 30, 2024 00:00:00").getTime();

// Update the counter every second
const countUpFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the start date
    const distance = now - startDate;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros if number is less than 10
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // Display the result in the elements with corresponding IDs
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = formatTime(days);
        document.getElementById("hours").innerText = formatTime(hours);
        document.getElementById("minutes").innerText = formatTime(minutes);
        document.getElementById("seconds").innerText = formatTime(seconds);
    }
}, 1000); // 1000ms = 1 second


// --- REVEAL SPECIAL MESSAGE ---
const revealButton = document.getElementById("reveal-button");
const letter = document.getElementById("letter");

if (revealButton && letter) {
    revealButton.addEventListener("click", () => {
        if (letter.classList.contains("hidden")) {
            letter.classList.remove("hidden");
            revealButton.textContent = "Click to Close";
        } else {
            letter.classList.add("hidden");
            revealButton.textContent = "Click to Open";
        }
    });
}
