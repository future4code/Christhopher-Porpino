import { FileManager } from './FileManager';

const create = (text: string, user: string) => {
    if (!text || !name) {

    }
};

class Post {
    constructor(public text: string) { }
}

class NormalPostCreator {
    public create(text: string) {
        const post = new Post(text);
        const fileManager = new FileManager("post.json");
        fileManager.writeFile(post);
    }
}

class UpperCasePostCreator extends NormalPostCreator {
    public create(text: string, user: string) {
        this.validateInput(text, user);
        const post = new Post(text.toUpperCase(), author, new Date());
        this.savePost(post)
    }
}

const message = "&Oi, tudo bem?"

const main = () => {
    if (message.indexOf("&") != -1) {
        const postCreator = new UpperCasePostCreator()
        postCreator.create(message, "")
    } else if (message.indexOf("%") !== -1) {

    } else {
        const postCreator = new NormalPostCreator()
        postCreator.create(message, "")
    }
}