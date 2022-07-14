const vowels = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}
