const transcription = (dna) => {
    let rna = '';
    let dnaTra = ['G', 'C', 'T', 'A'];
    let rnaTra = ['C', 'G', 'A', 'U'];

    for (let i = 0; i < dna.length; i++) {
        let index = dnaTra.indexOf(dna[i]);
        if (index >= 0) {
            rna += rnaTra[index];
        }
    }
    return rna;
}

console.log(transcription('GATC'))