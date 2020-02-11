const numbersArray: number[] = [1, 2, 3, 4, 5, 6]

type data = {
    lengthNumbers: number,
    oddNumbers: number,
    sumAllNumbers: number,
};

function calculateData(numbersArray: number[]) {
    let sumAllNumbers: number = 0

    for (let number of numbersArray) {
        sumAllNumbers += number
    }

    const response: data = {
        lengthNumbers: numbersArray.length,
        oddNumbers: numbersArray.filter((number) => number % 2 === 1).length,
        sumAllNumbers,
    }

    return response;
}

console.log(calculateData(numbersArray))