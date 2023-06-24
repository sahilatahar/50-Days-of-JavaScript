const number = '+919876543210';

function validateMobile(number) {

    let regex = /^(?:(\+91|0)\s?)?\d{10}$/;
    return regex.test(number);
}

console.log(`is a valid Indian mobile number: true ${validateMobile(number)}`)