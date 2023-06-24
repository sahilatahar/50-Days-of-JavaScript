function sayNumberInEnglish(n) {
    if (n < 0 || n > 999999999999) {
        throw new Error('complaining loudly');
    }

    const smalls = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigs = ['', 'thousand', 'million', 'billion'];

    if (n < 20) {
        return smalls[n];
    }

    let words = [];
    let scale = 0;

    while (n > 0) {
        if (n % 1000 != 0) {
            let chunk = getChunk(n % 1000);
            if (bigs[scale] != '') {
                chunk += ' ' + bigs[scale];
            }
            words.unshift(chunk);
        }
        n = Math.floor(n / 1000);
        scale++;
    }

    return words.join(' ');

    function getChunk(n) {
        let words = [];

        if (n >= 100) {
            words.push(smalls[Math.floor(n / 100)] + ' hundred');
            n %= 100;
        }

        if (n >= 20) {
            words.push(tens[Math.floor(n / 10)]);
            n %= 10;
        }

        if (n > 0) {
            // words.push(smalls[n]);
            return `${words.join(' ')}${words.length > 0 ? '-' : ' '}${smalls[n]}`;
        }
        return words.join(' ');
    }
}


console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`)

