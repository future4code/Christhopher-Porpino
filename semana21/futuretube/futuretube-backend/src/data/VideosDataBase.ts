import MainDB from "./MainDatabase";
import VideoGateway from "../business/gateways/videoGateway"

export default class VideoDB extends MainDB implements VideoGateway {
    async getAllVideos(page: number = 0) {

        try {
            const offset = (page - 1) * 10

            const result = await this.connection.raw(`
            SELECT id, title, url FROM futuretube_videos
            LIMIT 10
            OFFSET ${offset};
            `)

            return result[0]
        }
        catch (err) {
            throw new Error (err.sqlMessage)
        }
    }
}