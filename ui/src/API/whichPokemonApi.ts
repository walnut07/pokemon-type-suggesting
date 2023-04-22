import { Comment, CommentReq } from '../interface/interface';

import axios from 'axios';

class WhichPokemonApi {
    private readonly WHICH_SERVER_PATH: string;

    constructor() {
        // FIXME: This is a hack.  I should be able to use the same path for both dev and prod.
        const PROD_PATH = 'https://pokemon-gcp-server-hdyhszzhuq-uc.a.run.app';
        this.WHICH_SERVER_PATH = PROD_PATH;
    }

    async submitComment(comment: CommentReq) {
        await axios.put(this.WHICH_SERVER_PATH + 'comment', comment);
    }

    async getComments(pokeId: number): Promise<Comment> {
        return await axios.get(this.WHICH_SERVER_PATH + 'comments' + `?id=${pokeId}`).then(res => res.data);
    }
}

export {WhichPokemonApi}