import { Dispatch, SetStateAction, useEffect } from "react";

import { Comment } from "../../interface/interface";
import { WhichPokemonApi } from "../../API/whichPokemonApi";

interface Props {
    pokeId: number | null;
    comments: Comment | null;
    setComments: Dispatch<SetStateAction<Comment | null>>;
}

const Comments:  React.FC<Props> = ({pokeId, comments, setComments}) => {
    useEffect(() => {
        const fetchData = async () => {
            return await new WhichPokemonApi().getComments(pokeId!);
        }
        fetchData().then(res => setComments(res))
    }, [pokeId])

    return (
        <>
            {comments &&
                // TODO(kurumi): Sort comments by their unix time
                Object.values(comments).map(comment => {
                    return <article className="flex w-1/3 m-auto p-2 my-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                        {comment.Content}</article> 
                })
            }
        </>
    )

}

export default Comments;