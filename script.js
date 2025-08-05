// --- COUNT-UP TIMER ---
// This is the date you first met.
// Format: "Month Day, Year HH:MM:SS"
const startDate = new Date("January 30, 2023 00:00:00").getTime();

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
    // Check if elements exist before trying to update them
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
        // Use a more robust way to toggle visibility for better animation
        if (letter.classList.contains("hidden")) {
            // To show it, first remove 'hidden' to make it take up space
            letter.classList.remove("hidden");
            revealButton.textContent = "Click to Close";
        } else {
            // To hide it, add 'hidden'
            letter.classList.add("hidden");
            revealButton.textContent = "Click to Open";
        }
    });
}
