import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup();

function isHomepage(url) {
    return url === '/' || url === '/index.html'; 
}

// Function to handle the navbar animation
function handleNavbarAnimation(nextUrl) {
    const navbar = document.getElementById('navbar');
    const isCurrentHome = isHomepage(window.location.pathname);
    const isNextHome = isHomepage(new URL(nextUrl, window.location.origin).pathname);

    if (isCurrentHome && !isNextHome) { // User clicked regular page
        navbar.classList.add('animate-to-dropdown'); // transitions toward dropdown
    } else if (!isCurrentHome && isNextHome) { // User clicked home
        navbar.classList.add('animate-to-navbar'); // transitions to list
    }
}

/*
// Listen to Swup events
swup.hooks.on('animation:in:start', (next) => {
    handleNavbarAnimation(next.url);
});

swup.hooks.on('animation:out:start', () => {
    const navbar = document.getElementById('navbar');
    // Remove any animation classes if needed
    navbar.classList.remove('animate-to-dropdown', 'animate-to-navbar');
});

*/
