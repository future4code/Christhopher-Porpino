import { readFile, writeFileSync, readFileSync } from 'fs';

class JSONFileManager {
    getObjectFromFile() {
        try {
            const accounts = JSON.parse(readFileSync("./accountsData.json").toString())
            console.log(accounts)
            return accounts;
        } catch (error) {
            console.error(error)
            return error;
        }
    }
    writeObjectToFile(accounts: any) {
        try {
            writeFileSync("./accountsData.json", JSON.stringify(accounts))
        } catch (error) {
            console.error(error)
        }
    }
}

class Bank {
    accounts: any
    fileManager: JSONFileManager

    constructor() {
        this.accounts = []
        this.fileManager = new JSONFileManager
    }

    getAllAccounts() {
        this.accounts = this.fileManager.getObjectFromFile()
    }

    createAccount(cpf: string, name: string, age:number) {
        this.accounts.push(new UserAccount(cpf, name, age))
    }
}

class Transaction {
    value: number
    cpf: string
    description: string
}

class UserAccount {
    balance: number
    cpf: string
    name: string
    age: number
    transactions: Transaction[]

    constructor(cpf: string, name: string, age: number) {
        this.cpf = cpf
        this.name = name
        this.age = age
    }
}

const bank = new Bank

bank.getAllAccounts()
bank.createAccount(process.argv[4], process.argv[5], Number(process.argv[6]))
console.log(bank.accounts)
bank.fileManager.writeObjectToFile(bank.accounts)