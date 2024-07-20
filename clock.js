function updateTime() {
    const now = new Date();
    const timeStringFull = now.toLocaleTimeString();
    const timeStringMinimal = now.getHours() + ":" + now.getMinutes() + " ";
    const dateStringFull = now.toDateString();
    
    document.title = timeStringMinimal;
    document.getElementById('clock').textContent = timeStringFull;
    document.getElementById('date').textContent = dateStringFull;
}

setInterval(updateTime, 1000);

const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

function updateFavicon(e) {
    const favicon = document.getElementById('favicon');
    favicon.href = e.matches ? 'icons/time-light.svg' : 'icons/time.svg';
}

matchMedia.addListener(updateFavicon);
updateFavicon(matchMedia);
