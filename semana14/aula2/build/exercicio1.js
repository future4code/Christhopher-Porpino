const numbersArray = [1, 2, 3, 4, 5, 6];
function calculateData(numbersArray) {
    let sumAllNumbers = 0;
    for (let number of numbersArray) {
        sumAllNumbers += number;
    }
    const response = {
        lengthNumbers: numbersArray.length,
        oddNumbers: numbersArray.filter((number) => number % 2 === 1).length,
        sumAllNumbers,
    };
    return response;
}
console.log(calculateData(numbersArray));
//# sourceMappingURL=exercicio1.js.map