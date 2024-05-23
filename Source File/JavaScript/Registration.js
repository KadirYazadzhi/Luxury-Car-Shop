document.addEventListener("DOMContentLoaded", function() {
    class DisplayElement {
        constructor() {
            this.initElements();
            this.displayUsername();
            this.displaySpecialNumber();
        }

        initElements() {
            this.UsernameInProfile = document.getElementById('username-in-profile');
            this.SpecialNumber = document.getElementById('profile-sp-code');
        }

        displayUsername() {
            if (this.UsernameInProfile) {
                this.UsernameInProfile.innerText = `@` + localStorage.getItem('username');
            } else {
                console.error('Element with id "username-in-profile" not found');
            }
        }

        displaySpecialNumber() {
            if (this.SpecialNumber) {
                let specialCode = localStorage.getItem('specialCode');
                if (specialCode && specialCode !== '') {
                    this.SpecialNumber.innerHTML = specialCode;
                } else {
                    specialCode = `#${Math.floor(Math.random() * 10000000)}`;
                    this.SpecialNumber.innerHTML = specialCode;
                    localStorage.setItem('specialCode', specialCode);
                }
            }
            else {
                console.error('Element with id "profile-sp-code" not found');
            }
        }
    }

    new DisplayElement();
});

