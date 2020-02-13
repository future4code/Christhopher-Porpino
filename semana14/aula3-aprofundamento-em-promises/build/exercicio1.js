"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "../textos";
const fs = require("fs");
const directoryPath = path.join(__dirname, "files");
fs.readdir(directoryPath, (err, files, []) => {
    if (err) {
        console.log("Erro ao buscar informações.");
    }
    else {
        files.forEach(function (file) {
            console.log(file);
        });
    }
});
//# sourceMappingURL=exercicio1.js.map