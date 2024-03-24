function addNumber(arr) {
    let s = 0;
    for (let i of arr) {
        if (Array.isArray(i)) {
            s += addNumber(i);
        } else if (typeof i === 'number') {
            s += i;
        }
    }
    return s;
}
const inputValue = [1, 2, 3, [[[4], 5], [["6"]], { obj: 10 }]];
const result = addNumber(inputValue);
console.log(result); // Saída: 15