let squareColors = []; // Array to store square colors
let subSquareColors = []; // Array to store square colors
let squareUrls = []; // Array to store square URLs

const colors = ['#8BC28C', '#EA6759', '#F3C65F', '#5DADE2', '#6667AB', '#F88F58', '#FA8072', '#E6E6FA', '#708090'];

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

            // Prompt user to input word or name
            const word = prompt("Enter a word or name for the square:");
            if (word !== null && word.trim() !== '') {
                const wordOverlay = document.createElement('div');
                wordOverlay.className = 'word-overlay';
                wordOverlay.textContent = word;
                square.appendChild(wordOverlay);
            }

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
            const color = colors[subSquareColors.length];
            subSquare.style.backgroundColor = color;
            subSquareColors.push(color); // Add color to array
            container.appendChild(subSquare);
            subSquare.style.display = 'block';

            // Prompt user to input word or name
            const word = prompt("Enter a word or name for the square:");
            if (word !== null && word.trim() !== '') {
                const wordOverlay = document.createElement('div');
                wordOverlay.className = 'word-overlay';
                wordOverlay.textContent = word;
                subSquare.appendChild(wordOverlay);
            }
        }, 200);
    } else {
        alert('Maximum limit reached');
    }
}