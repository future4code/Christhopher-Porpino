import { Commerce } from "../commerce";
import { Client } from "../client";

export class CommercialClient extends Commerce implements Client {

    constructor(
        name: string,
        cnpj: string,
        cep: string,
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number
    ) {
        super(name, cnpj, cep)
    }
    calculateBill(): number {
        return 0
    }
}