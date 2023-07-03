const needsLicense = (kind) => {
    return kind === 'car' || kind === 'truck';
}

const chooseVehicle = (option1, option2) => {
    return `${option1 < option2 ? option1 : option2} is clearly the better choice.`;
}

const calculateResellPrice = (originalPrice, age) => {
    let price;

    if(age < 3) {
        price = (80/100) * originalPrice;
    } else if(age === 3 && age <= 10) {
        price = (70/100) * originalPrice;
    } else {
        price = (50/100) * originalPrice;
    }

    return price; 
}