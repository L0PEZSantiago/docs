document.addEventListener('DOMContentLoaded', () => {
    const padWithZeros = (value, length) => value.toString().padStart(length, '0');
    const formatCardNumber = (value) => {
        let rawValue = value.replace(/\D/g, '');
        return rawValue.match(/.{1,4}/g)?.join(' ') || rawValue;
    };

    const cardNumberInput = document.querySelector('.card-number-input');
    const cardNumberDisplay = document.querySelector('.card-number-display');

    cardNumberInput.addEventListener('input', () => {
        let rawValue = cardNumberInput.value.replace(/\D/g, '');
        cardNumberInput.value = formatCardNumber(rawValue);

        let paddedValue = rawValue.padEnd(16, '0');
        cardNumberDisplay.textContent = formatCardNumber(paddedValue);
    });

    const cardHolderInput = document.querySelector('.card-holder-input');
    const cardHolderDisplay = document.querySelector('.card-holder-display');

    cardHolderInput.addEventListener('input', () => {
        cardHolderDisplay.textContent = cardHolderInput.value.toUpperCase();
    });

    const expDateDisplay = document.querySelector('.card-expiry-display');
    const expMonthInput = document.getElementById('month');
    const expYearInput = document.getElementById('year');

    const updateExpiryDate = () => {
        const month = padWithZeros(expMonthInput.value.replace(/\D/g, ''), 2);
        const year = padWithZeros(expYearInput.value.replace(/\D/g, ''), 2);
        expDateDisplay.textContent = `${month}/${year}`;
    };

    expMonthInput.addEventListener('input', updateExpiryDate);
    expYearInput.addEventListener('input', updateExpiryDate);

    const cardCvcInput = document.getElementById('cvc');
    const cardCvcDisplay = document.querySelector('.card-cvc-display');

    cardCvcInput.addEventListener('input', () => {
        let rawCvc = cardCvcInput.value.replace(/\D/g, '');
        cardCvcDisplay.textContent = padWithZeros(rawCvc, 3);
    });
});