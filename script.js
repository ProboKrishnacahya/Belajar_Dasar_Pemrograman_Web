// Helper function to show a tab and update button styles
function showTab(tabId) {
    // Hide all content divs
    const tabs = ['image', 'video'];
    tabs.forEach(tab => {
        document.getElementById(`${tab}-content`).style.display = tab === tabId ? 'block' : 'none';
    });

    // Remove the "active" class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add the "active" class to the selected button
    document.getElementById(`${tabId}-tab`).classList.add('active');
}

// Event listeners for tab clicks
document.getElementById('image-tab').addEventListener('click', () => showTab('image'));
document.getElementById('video-tab').addEventListener('click', () => showTab('video'));

// Initial state: Show "Image" content by default
showTab('image');