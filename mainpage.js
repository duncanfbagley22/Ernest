let squareColors = []; // Array to store square colors
let subSquareColors = []; // Array to store square colors
let squareUrls = []; // Array to store square URLs

const colors = ['#8BC28C', '#EA6759', '#F3C65F', '#5DADE2', '#6667AB', '#F88F58'];
// Function to get color for a specific page
function getColorForPage(pageName) {
    // Define a mapping of page names to colors
    const pageColorMap = {
        'page1.html': colors[0],
        'page2.html': colors[1],
        'page3.html': colors[2],
        'page4.html': colors[3],
        'page5.html': colors[4],
        'page6.html': colors[5],
        // Add more mappings as needed
    };

    // Check if the page name exists in the map
    if (pageName in pageColorMap) {
        return pageColorMap[pageName];
    } else {
        // Default color if page name is not found
        return '#666666';
    }
}

function addSquare() {
    if (squareColors.length < 6) {
        setTimeout(function() {
            const container = document.getElementById('squarecontainer');
            const square = document.createElement('div');
            square.className = 'square fade-in';
            const color = colors[squareColors.length];
            square.style.backgroundColor = color;
            squareColors.push(color); // Add color to array
            container.appendChild(square);
            square.style.display = 'block';
            square.style.display = 'flex'; // Make square container a flexbox
            square.style.alignItems = 'center'; // Center items vertically
            square.style.justifyContent = 'center'; // Center items horizontally

            // Define an array of icon classes
            const icons = [ 'fa-file-invoice-dollar','fa-dumbbell', 'fa-user-group', 'fa-brain', 'fa-briefcase', 'fa-question'];

            // Add icon overlay based on square position
            const iconIndex = squareColors.length - 1; // Adjust index to start from 0
            const iconClass = icons[iconIndex];
            const iconOverlay = document.createElement('i');
            iconOverlay.className = 'fa-solid ' + iconClass;
            iconOverlay.style.color = '#ffffff';
            iconOverlay.style.fontSize = '92px';
            square.appendChild(iconOverlay);

            // Generate unique URL for each square based on its position
            const url = 'page' + (squareColors.length) + '.html'; // Example URL, replace with your actual URLs
            squareUrls.push(url);

            // Add click event listener to navigate to the associated URL
            square.addEventListener('click', function() {
                navigateToUrl(square);
            });
        }, 200);
    } else {
        alert('Maximum limit reached');
    }
}

function navigateToUrl(square) {
    // Retrieve the URL associated with this square
    const squareIndex = Array.from(square.parentNode.children).indexOf(square);
    const url = squareUrls[squareIndex];
    // Navigate to the URL
    window.location.href = url;
}

function addSubSquare() {
    if (subSquareColors.length < 9) {
        setTimeout(function() {
            const container = document.getElementById('subsquarecontainer');
            const subSquare = document.createElement('div');
            subSquare.className = 'subSquare fade-in';
            const pageName = window.location.href.slice(-10);
            const color = getColorForPage(pageName);
            subSquare.style.backgroundColor = color;
            subSquareColors.push(color); // Add color to array
            container.appendChild(subSquare);
            subSquare.style.display = 'block';

        }, 200);
    } else {
        alert('Maximum limit reached');
    }
}

// Get a reference to the button element
const button = document.getElementById('goBackButton');

// Add an event listener for the click event
button.addEventListener('click', function() {
    // Define the URL you want to redirect to
    const buttonUrl = 'index.html';
    
    // Redirect the user to the specified URL
    window.location.href = buttonUrl;
});

