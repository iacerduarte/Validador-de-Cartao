/**
 * Validate a credit card number and determine its flag.
 * @param {string} number - The credit card number.
 * @returns {Object} - An object containing the validation result and the card flag.
 */
function validateCreditCard(number) {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        enroute: /^(2014|2149)\d{11}$/,
        voyager: /^8699[0-9]{11}$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        aura: /^50[0-9]{14,17}$/
    };

    for (const [flag, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(number)) {
            return { valid: true, flag };
        }
    }

    return { valid: false, flag: null };
}

// Example usage:
const cardNumber = '4111111111111111'; // Replace with the actual card number
const result = validateCreditCard(cardNumber);
console.log(result); // { valid: true, flag: 'visa' }