// Get the elements from the HTML
const envelope = document.querySelector('.envelope');
const giftButton = document.getElementById('gift-button');
const clickMessage = document.querySelector('.message-to-click');

// Add an event listener to the envelope
envelope.addEventListener('click', () => {
    // Add the 'open' class to trigger the CSS animations
    envelope.classList.toggle('open');

    // After a short delay, show the button and hide the message
    setTimeout(() => {
        if (envelope.classList.contains('open')) {
            giftButton.classList.remove('hidden');
            // This now correctly hides the message by making it transparent
            clickMessage.style.animation = 'none'; // Stop the animation from interfering
            clickMessage.style.opacity = '0';
            clickMessage.style.pointerEvents = 'none';
        } else {
            giftButton.classList.add('hidden');
            // This brings the message back by making it opaque again
            clickMessage.style.opacity = '1';
            clickMessage.style.pointerEvents = 'auto';
        }
    }, 500); // 500ms delay matches the animation duration
});
