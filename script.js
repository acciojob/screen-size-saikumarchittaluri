//your JS code here. If required.
// Get references to the necessary DOM elements
    const sizeInfoDiv = document.getElementById('sizeInfo');
    const h1Tag = sizeInfoDiv.querySelector('h1');

    // Function to update the size information
    function updateSizeInfo() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      h1Tag.textContent = `Width: ${width} and Height: ${height}`;
    }

    // Initial update
    updateSizeInfo();

    // Attach an event listener to the window's resize event
    window.addEventListener('resize', updateSizeInfo);
