class UserInfoForm {
    constructor() {
        this.userInformation = document.querySelector('.user-information');
        this.openUserInformationIcon = document.getElementById('openUserInformationIcon');
        this.openUserInformationText = document.getElementById('openUserInformationText');
        this.isOpen = false;

        this.openUserInformationIcon.addEventListener('click', this.toggleForm.bind(this));
        this.openUserInformationText.addEventListener('click', this.toggleForm.bind(this));
    }

    toggleForm() {
        if (this.isOpen) {
            this.userInformation.style.display = 'none';
        } else {
            this.userInformation.style.display = 'flex';
        }
        this.isOpen = !this.isOpen;
    }
}

// Create an instance of the UserInfoForm class
const userInfoForm = new UserInfoForm();
