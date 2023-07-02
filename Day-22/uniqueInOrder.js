let uniqueInOrder = (iterable) => {

    if (typeof iterable === 'string') {
        iterable = iterable.split('');
    }

    return iterable.filter((item, index) => item !== iterable[index - 1]);
};