const timeToMixJuice = (name) => {
    const juices = {
        'Pure Strawberry Joy': 0.5,
        'Energizer': 1.5,
        'Green Garden': 1.5,
        'Tropical Island': 3,
        'All or Nothing': 5
    }

    return juices[name] || 2.5;
}

const limesToCut = (wedgesNeeded, limes) => {
    let wedges = 0;

    let limeSize = {
        'small': 6,
        'medium': 8,
        'large': 10
    }

    for (let i = 0; i < limes.length; i++) {

        wedges += limeSize[limes[i]];

        if (wedges >= wedgesNeeded) {
            return i + 1;
        }
    }

    return 'not enough limes';
}

const remainingOrders = (timeLeft, orders) => {
    let remainingTime = 0;

    for (let i = 0; i < orders.length; i++) {
        remainingTime += timeToMixJuice(orders[i]);
        if (remainingTime > timeLeft) {
            return orders.slice(i+1);
        }
    }
    return 'all orders completed';
}


console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))