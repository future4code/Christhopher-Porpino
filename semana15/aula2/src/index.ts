import { readFileSync, writeFileSync } from 'fs';
import { Dish } from "./classes/dish";
import { SaltyDish } from "./classes/saltydish";
import { Dessert } from "./classes/dessert";

const tortaDeLimao = new Dessert(
    5, 2, ["farinha"], 30, 8
)

const lasanha = new SaltyDish(
    6, 3, ["macarrao"], 40
)

const dishes: Dish[] = [
    tortaDeLimao,
    lasanha
];

abstract class Employee {
    static employeeNumber: number = 0
    constructor(public name: string, public payment: number) {
        Employee.employeeNumber++
    }
    public abstract sayJob(): void;
}

class Cashier extends Employee {
    public sayJob(): string {
        return "Eu sou um caixa"
    }
    public calculateBill(dishes: Dish[]): number {
        let total = 0
        for (let eachDish of dishes) {
            total += eachDish.getPrice()
        }
        return total
    }
}

const caixa = new Cashier(
    "Jose", 1300
)

console.log(dishes)
console.log("quantidade de funcionarios:", Employee.employeeNumber)
// console.log(caixa.calculateBill(dishes))

class Manager extends Cashier {
    public sayJob(): string {
        return "Eu sou um Gerente"
    }
}

class Chef extends Employee {
    public sayJob(): string {
        return "Eu sou um Chef"
    }
    // TO DO ITEM 8
    //TO TO ITEM 9
}



// restaurante

// funcionarios
// caixa
// gerente
// chef


// criarPrato
// excluirPrato
// contratarFuncionario
// demitirFuncionario
// calcularValor

