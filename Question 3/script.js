
  // Function to display the status message
  function displayStatusMessage(message) {
    const statusBar = document.getElementById('statusBar');
    statusBar.textContent = message;
    statusBar.style.display = 'block';

    // Hide the status message after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      statusBar.style.display = 'none';
    }, 5000);
  }

  // Call the function with your message
  displayStatusMessage('Time is running out');
