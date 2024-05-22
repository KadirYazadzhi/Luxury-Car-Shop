document.addEventListener("DOMContentLoaded", function() {
    const cardNameInput = document.querySelector('.card-name-input');
    const cardNumberInput = document.querySelector('.card-number-input');
    const expiryMMInput = document.querySelector('.expiry-mm-input');
    const expiryYYYYInput = document.querySelector('.expiry-yyyy-input');
    const cvvInput = document.querySelector('.cvv-input');

    const cardNameDisplay = document.querySelector('.card-name');
    const cardNumberDisplayParts = document.querySelectorAll('.card-number-part');
    const cardExpiryDisplay = document.querySelector('.card-expiry');

    cardNameInput.addEventListener('input', function() {
        cardNameDisplay.textContent = cardNameInput.value || 'Giga Tamarashvili';
    });

    cardNumberInput.addEventListener('input', function() {
        let cardNumber = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
        cardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
        cardNumberInput.value = cardNumber;

        cardNumberDisplayParts.forEach((part, index) => {
            part.textContent = cardNumber.substring(index * 5, (index + 1) * 5).trim().padEnd(4, '*');
        });
    });

    function updateExpiryDate() {
        const mm = expiryMMInput.value.padStart(2, '0').substring(0, 2);
        const yyyy = expiryYYYYInput.value.substring(2, 4);
        cardExpiryDisplay.textContent = `${mm}/${yyyy}` || '12/18';
    }

    expiryMMInput.addEventListener('input', function() {
        expiryMMInput.value = expiryMMInput.value.replace(/\D/g, '').substring(0, 2);
        updateExpiryDate();
    });

    expiryYYYYInput.addEventListener('input', function() {
        expiryYYYYInput.value = expiryYYYYInput.value.replace(/\D/g, '').substring(0, 4);
        updateExpiryDate();
    });

    cvvInput.addEventListener('input', function() {
        cvvInput.value = cvvInput.value.replace(/\D/g, '').substring(0, 3);
    });

});