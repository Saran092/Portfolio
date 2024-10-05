function showSidebar()
{
	const sidebar = document.querySelector('.sideMenu');
	sidebar.style.display='flex';
}

function hideSidebar()
{
	const sidebar = document.querySelector('.sideMenu');
	sidebar.style.display='none';
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            if (themeStylesheet.getAttribute('href') === 'light.css') {
                themeStylesheet.setAttribute('href', 'dark.css');
                toggleThemeButton.src = "./image/moon_icon.png";
                window.location.href = 'index.html';
            } else {
                themeStylesheet.setAttribute('href', 'light.css');
                toggleThemeButton.src = "./image/sun_icon.png";
                window.location.href = 'light.html';
            }
        });
    } else {
        console.error("Toggle theme button not found.");
    }
});