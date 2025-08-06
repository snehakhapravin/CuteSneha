// Get the elements from the HTML
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const giftButton = document.getElementById('gift-button');
const clickMessage = document.querySelector('.message-to-click');

// Create a function to handle the open/close logic
const toggleEnvelope = (event) => {
    // Prevent default browser actions, especially for touch
    event.preventDefault();
    
    // Find the actual envelope element to add the 'open' class to
    const envelopeElement = document.querySelector('.envelope');
    envelopeElement.classList.toggle('open');

    // After a short delay, show the button and hide the message
    setTimeout(() => {
        if (envelopeElement.classList.contains('open')) {
            giftButton.classList.remove('hidden');
            // Add our new CSS class to reliably hide the message
            clickMessage.classList.add('hidden-by-js');
        } else {
            giftButton.classList.add('hidden');
            // Remove the class to let the message reappear
            clickMessage.classList.remove('hidden-by-js');
        }
    }, 500); // 500ms delay matches the animation duration
};

// Add event listeners for both mouse clicks and touch events to the envelope wrapper
if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', toggleEnvelope);
    envelopeWrapper.addEventListener('touchstart', toggleEnvelope);
}
