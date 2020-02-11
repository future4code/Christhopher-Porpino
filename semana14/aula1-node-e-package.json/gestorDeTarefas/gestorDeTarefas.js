const fs = require('fs');
const fileName = process.argv[2];
const newTask = `\n${process.argv[3]}`;

try {
    fs.appendFileSync(fileName, newTask, 'utf8');
    console.log('Tarefa adicionada.')
} catch (error) {
    console.error(error)
}