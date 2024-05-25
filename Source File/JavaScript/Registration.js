class DisplayElement {
    constructor() {
        this.initElements();
        this.displayUsername();
        this.displaySpecialNumber();
        this.LogOut();
    }

    initElements() {
        this.UsernameInProfile = document.getElementById('username-in-profile');
        this.SpecialNumber = document.getElementById('profile-sp-code');
        this.LogOutText = document.getElementById('LogOutRegistrationFormIcon');
        this.LogOutIcon = document.getElementById('LogOutRegistrationFormText');
    }

    displayUsername() {
        if (this.UsernameInProfile) {
            this.UsernameInProfile.innerText = `@` + localStorage.getItem('username');
        }
        else {
            console.error('Element with id "username-in-profile" not found');
        }
    }

    displaySpecialNumber() {
        if (this.SpecialNumber) {
            let specialCode = localStorage.getItem('specialCode');
            if (specialCode && specialCode !== '') {
                this.SpecialNumber.innerHTML = specialCode;
            }
            else {
                specialCode = `#${Math.floor(Math.random() * 10000000)}`;
                this.SpecialNumber.innerHTML = specialCode;
                localStorage.setItem('specialCode', specialCode);
            }
        }
        else {
            console.error('Element with id "profile-sp-code" not found');
        }
    }

    LogOut() {
        this.LogOutText.addEventListener('click', () => {
            this.LogOutMethodForWorking();
        });

        this.LogOutIcon.addEventListener('click', () => {
            this.LogOutMethodForWorking();
        });
    }

    LogOutMethodForWorking() {
        localStorage.removeItem('specialCode');
        localStorage.removeItem('username');
        this.UsernameInProfile.innerText = '';
        this.SpecialNumber.innerHTML = '';
        localStorage.setItem('isValidForOpenProfileOrRegistrationForm', true.toString());
        window.location = 'index.html';
    }
    }

    new DisplayElement();


