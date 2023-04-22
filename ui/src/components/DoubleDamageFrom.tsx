import { Chip } from "@material-tailwind/react";
import { DoubleDamageFromArray } from "../interface/interface";
import { useEffect } from "react";

function DoubleDamageFrom({doubleDamageTo}: {doubleDamageTo: DoubleDamageFromArray}) {
    return (
        <div className="flex flex-wrap justify-center space-x-2">
            <span>is weak to</span>
            {doubleDamageTo.map((type) => {
                return <p className="bg-blue-400 text-white font-bold py-1 px-2 rounded">
                    {type['name']}</p>
            })}
        </div>
    )
}

export default DoubleDamageFrom;