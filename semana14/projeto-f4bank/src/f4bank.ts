import * as moment from 'moment'
import { readFile, writeFileSync } from 'fs'
import { type } from 'os'

const accountAction: string = process.argv[4];

type account = {
    holder: {
        name: string,
        cpf: string,
        birthDate: any,
    },
    expenses: expense[],
    balance: number
};

type expense = {
    value: number,
    description: string,
    expenseDate: Date,
};

new Promise((resolve, reject) => {
    readFile('./accountsData.json', callback)
    function callback(err: Error, data: Buffer) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    }
}).then(
    (data: string) => updateAccounts(JSON.parse(data))
).catch(
    (err) => console.log(err)
)

const updateAccounts = (accounts: account[]) => {
    switch (process.argv[4]) {
        case "signUp":
            createNewAccount(
                accounts,
                process.argv[5],
                process.argv[6],
                process.argv[7],
            )
            break

        case "showBalance":

            break

        
        default:
            console.log("Erro. Tente novamente.")
            break
    }
    writeFileSync('./accountsData.json', JSON.stringify(accounts))
}

function createNewAccount(accounts: account[], newName: string, newCpf: string, newBirthDate: string) {
    accounts.push({
        holder: {
            name: newName,
            cpf: newCpf,
            birthDate: moment(newBirthDate, "DD/MM/YYYY"),
        },
        expenses: [],
        balance: 0
    })
}

// const showBalance = async () => {
//     const jsonContent : string = await readAccountsPromise;
//     const accountsObject:  accountFile = JSON.parse(jsonContent);
//     console.log("O seu saldo é: ", accountsObject.accountList.find(
//         (account: account) => account.holder.name === proccess.argv[5] && account.holder.cpf === (process.argv[6])
//     ));
    
// }