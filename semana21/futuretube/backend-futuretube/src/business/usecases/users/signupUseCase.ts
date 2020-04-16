import UserDB from "../../../data/UserDataBase";
import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';
import User from "../../entities/user";

interface SignupInput {
    name: string
    email: string
    password: string
    birthDate: Date
    photo: string
}

export default class SignupUC {
    constructor(
        private database: UserDB
    ) { }

    async execute(input: SignupInput) {
        const id= v4()
        const rounds = 10
        const hash = await bcrypt.hash(input.password, rounds)
        await this.database.signUp(new User(id, input.name, input.email, hash, input.birthDate, input.photo))
    }
}