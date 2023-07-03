function isIsogram(str) {

    str = str.toLowerCase();

    return [...new Set(str.split(''))].length === str.length;
}
