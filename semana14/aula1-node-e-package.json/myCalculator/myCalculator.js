let operation = process.argv[2];

switch (operation) {
    case "add":
        const addValue = Number(process.argv[3]) + Number(process.argv[4])
        console.log("O resultado da adição é:", addValue)
        break;
    case "sub":
        const subValue = Number(process.argv[3]) - Number(process.argv[4])
        console.log("O resultado da subtração é:", subValue)
        break;
    case "mult":
        const multValue = Number(process.argv[3]) * Number(process.argv[4])
        console.log("O resultado da multiplicação é:", multValue)
        break;
    case "div":
        const divValue = Number(process.argv[3]) / Number(process.argv[4])
        console.log("O resultado da divisão é:", divValue)
        break;
    default:
        console.log("algo de errado não está certo. tente novamente")
        break;
}