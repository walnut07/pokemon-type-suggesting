import { Dispatch, SetStateAction } from "react";

import { DoubleDamageFromArray } from "../interface/interface";
import { PokeTypeApi } from "../API/api";

interface Props {
    setDoubleDamageFrom: Dispatch<SetStateAction<DoubleDamageFromArray>>;
    setPokeId: Dispatch<SetStateAction<number | null>>;
}

const Input:  React.FC<Props> = ({setDoubleDamageFrom, setPokeId}) => {
    const displayDoubleDamageFrom = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const input = document.getElementById('poke-name') as HTMLInputElement;
        const pokeName = input.value;
        const pokeTypeApi = new PokeTypeApi(pokeName)
        try {
            const doubleDamageTo = await pokeTypeApi.getDoubleDamageFrom();
            const pokeId = await pokeTypeApi.getPokeId() as number;
            setDoubleDamageFrom(doubleDamageTo);
            setPokeId(pokeId)
        } catch (e) {
            console.error("error while getting Pokemon data")
        }
    }

    return (
        <form className="py-10">
            <label htmlFor="poke-name" className="block mb-2 text-sm font-medium text-gray-900">Pokemon Name</label>
            <input type="text" id="poke-name" className="block w-40 py-2 my-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                sm:text-xs focus:ring-blue-500 focus:border-blue-500 m-auto" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit" onClick={displayDoubleDamageFrom}>
                Search
            </button>
        </form>
    )
}

export default Input;