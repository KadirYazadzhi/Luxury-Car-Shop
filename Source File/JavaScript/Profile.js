document.addEventListener("DOMContentLoaded", function() {
    class FormHandler {
        constructor() {
            this.initElements();
            this.checkUserStatus();
            this.addEventListeners();
        }

        initElements() {
            this.InputForEmail = document.getElementById('input-for-email');
            this.SpecialText = document.getElementById('signAndLogInFormText');
            this.forgotPassword = document.getElementById('forgot-password');
            this.titleForm = document.getElementById('titleForm');
            this.messageForm = document.getElementById('messageForm');
            this.buttonForm = document.getElementById('buttonForm');
            this.textInForm = document.getElementById('textInForm');
            this.usernameField = document.getElementById('username');
            this.emailField = document.getElementById('emailNew');
            this.passwordField = document.getElementById('password');
            this.form = document.querySelector('.form');
            this.formContainer = document.getElementById('registration-form');

            this.validateElements();
        }

        validateElements() {
            if (!this.InputForEmail) {
                console.error('Element with id "input-for-email" not found');
                return;
            }
            if (!this.SpecialText) {
                console.error('Element with id "signAndLogInFormText" not found');
                return;
            }
            if (!this.forgotPassword) {
                console.error('Element with id "forgot-password" not found');
                return;
            }
            if (!this.usernameField) {
                console.error('Element with id "username" not found');
                return;
            }
            if (!this.emailField) {
                console.error('Element with id "emailNew" not found');
                return;
            }
            if (!this.passwordField) {
                console.error('Element with id "password" not found');
                return;
            }
            if (!this.form) {
                console.error('Form element not found');
                return;
            }
            if (!this.formContainer) {
                console.error('Form container element not found');
                return;
            }
        }

        addEventListeners() {
            this.SpecialText.addEventListener('click', this.handleSpecialTextClick.bind(this));
            this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        handleSpecialTextClick() {
            console.log('SpecialText clicked, current text:', this.SpecialText.textContent);

            if (this.SpecialText.textContent.trim() === "Sign up") {
                this.showSignUpForm();
            } else {
                this.showLoginForm();
            }
        }

        showSignUpForm() {
            this.InputForEmail.style.display = 'block';
            this.forgotPassword.style.display = 'none';
            this.SpecialText.innerHTML = 'Login';
            this.titleForm.innerHTML = 'Sign up';
            this.messageForm.innerHTML = 'Sign up with social accounts';
            this.buttonForm.innerHTML = 'Sign up';
            this.textInForm.innerHTML = 'You already have an account?';
        }

        showLoginForm() {
            this.InputForEmail.style.display = 'none';
            this.forgotPassword.style.display = 'flex';
            this.SpecialText.innerHTML = 'Sign up';
            this.titleForm.innerHTML = 'Login';
            this.messageForm.innerHTML = 'Login with social accounts';
            this.buttonForm.innerHTML = 'Login';
            this.textInForm.innerHTML = 'You don’t have an account?';
        }

        handleFormSubmit(event) {
            event.preventDefault();

            if (this.buttonForm.textContent.trim() === "Sign up") {
                if (this.validateFormUsernameAndPassword() && this.validateFormEmail()) {
                    console.log('Sign up form submitted successfully!');
                    this.saveUserData(true);
                } else {
                    console.error('Sign up form validation failed');
                }
            } else {
                if (this.validateFormUsernameAndPassword()) {
                    console.log('Login form submitted successfully!');
                    this.saveUserData(false);
                } else {
                    console.error('Login form validation failed');
                }
            }
        }

        validateFormUsernameAndPassword() {
            let isValid = true;

            if (!this.validateUsername(this.usernameField.value)) {
                isValid = false;
                console.error('Invalid username');
                this.usernameField.placeholder = 'Invalid username';
                this.usernameField.style.backgroundColor = '#fdd1d1';
            }

            if (!this.validatePassword(this.passwordField.value)) {
                isValid = false;
                console.error('Invalid password');
                this.passwordField.placeholder = 'Invalid password';
                this.passwordField.style.backgroundColor = '#fdd1d1';
            }

            return isValid;
        }

        validateFormEmail() {
            let isValid = true;

            if (!this.validateEmail(this.emailField.value)) {
                isValid = false;
                console.error('Invalid email');
                this.emailField.placeholder = 'Invalid email';
                this.emailField.style.backgroundColor = '#fdd1d1';
            }

            return isValid;
        }

        validateUsername(username) {
            return username && username.length >= 3;
        }

        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        validatePassword(password) {
            return password && password.length >= 6;
        }

        saveUserData(isSignUp) {
            const username = this.usernameField.value;
            const password = this.passwordField.value;

            if (isSignUp) {
                const email = this.emailField.value;
                localStorage.setItem('username', username);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            }

            this.showWelcomeMessage(username);
        }

        showWelcomeMessage(username) {
            alert(`Welcome, ${username}!`);
            this.formContainer.style.display = 'none';
        }

        checkUserStatus() {
            const username = localStorage.getItem('username');
            if (username) {
                this.showWelcomeMessage(username);
            }
        }
    }

    new FormHandler();
});



