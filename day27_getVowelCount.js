function getCount(str) {
    let vowelsCount = 0;

    str = str.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u']; 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}
