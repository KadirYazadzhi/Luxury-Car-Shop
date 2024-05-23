document.addEventListener("DOMContentLoaded", function() {
    class Clock {
        constructor(elementId) {
            this.element = document.getElementById(elementId);
            if (!this.element) {
                console.error(`Element with id "${elementId}" not found`);
                return;
            }
            this.startClock();
        }

        startClock() {
            this.updateTime();
            setInterval(() => this.updateTime(), 1000);
        }

        updateTime() {
            const now = new Date();

            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            this.element.innerText = formattedDateTime;
        }
    }

    // Create a new Clock instance and pass the id of the element where the time should be displayed
    new Clock('clock-element');
});
