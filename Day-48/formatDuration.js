function formatDuration(seconds) {
    let duration = '';

    let SECONDS_IN_HOUR = 60 * 60;

    while (seconds > 0) {
        if (seconds > SECONDS_IN_HOUR) {
            duration += Math.floor(seconds / SECONDS_IN_HOUR);
            duration += ' hour';
            seconds = seconds % SECONDS_IN_HOUR;
        } else if (seconds > 60) {
            if (duration.length > 0) {
                duration += ', ';
            }
            duration += Math.floor(seconds / 60);
            duration += ' minute';
            seconds = seconds % 60;
        } else {
            if (duration.length > 0) {
                duration += ' and ';
            }
            duration += `${seconds} second${seconds > 1 ? 's' : ''}`;
            seconds = 0;
        }
    }
    return duration;
}

console.log(formatDuration(3662));