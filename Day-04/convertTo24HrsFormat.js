const time = '5:00AM';

function convertTo24HrsFormat(time) {

    let timeArray = time.split(':');
    let hour = Number(timeArray[0]);

    if (time.endsWith('PM')) {
        hour = hour !== 12 ? hour + 12 : hour;
    } else {
        hour = hour === 12 ? hour - 12 : hour;
    }
    time = `${hour.toString().padStart(2, 0)}:${timeArray[1].slice(0, -2)}`;
    return time;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
