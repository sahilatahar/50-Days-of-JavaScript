function high(x) {
    let words = x.split(' ');
    let highScoreWord, highScore = 0;

    words.forEach(word => {
        let score = 0;
        for(let char of word) {
            score += char.charCodeAt(0) - 96;
        }
        console.log(word, score)
        if(score > highScore) {
            highScore = score;
            highScoreWord = word;
        }
    });
    return highScoreWord;
}

console.log(high('man i need a taxi up to ubud'))
