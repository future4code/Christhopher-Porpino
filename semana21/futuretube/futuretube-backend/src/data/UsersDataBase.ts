import MainDB from "./MainDatabase";

export default class UserDB extends MainDB {
    async getUserByEmail(email: string){
        const result = await this.connection.raw(`
            SELECT * FROM futuretube_USERS
            WHERE email="${email}"
        `)
        return result[0][0]
    }

    async login(){}

    async signUp(){}
}