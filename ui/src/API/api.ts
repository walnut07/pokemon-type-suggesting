import { DoubleDamageFromArray } from '../interface/interface';
import axios from 'axios';

class PokeTypeApi {
    private readonly POKE_API_PATH: string;
    private readonly pokeName: string;
    
    constructor(pokeName: string) {
        this.POKE_API_PATH = 'https://pokeapi.co/api/v2/';
        this.pokeName = pokeName;
    }

    async getPokeId(): Promise<number> {
        const data = await axios.get(this.POKE_API_PATH + 'pokemon/' + this.pokeName).then(res => res.data);
        return data['id'];
    }
    
    async getDoubleDamageFrom(): Promise<DoubleDamageFromArray> {
        const urlToType = await this.getUrlToType();
        const data = await axios.get(urlToType).then(res => res.data);
        return data['damage_relations']['double_damage_from'];
    }

    private async getUrlToType(): Promise<string> {
        const data = await axios.get(this.POKE_API_PATH + 'pokemon/' + this.pokeName)
            .then(res => res.data);
        return data['types'][0]['type']['url'];
    }
}

export {PokeTypeApi}