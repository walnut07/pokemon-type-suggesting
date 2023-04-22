interface DoubleDamageFromObj {
    name: string;
    url: string;
}

export interface DoubleDamageFromArray extends Array<DoubleDamageFromObj>{}

export interface CommentReq {
    pokemonId: number;
    unixTime: number;
    content: string;
}

export interface Comment {
    [id: string]: {
        Content: string;
        UnixTime: number;
    }
}