import './App.css';

import { Comment, DoubleDamageFromArray } from './interface/interface';

import CommentForm from './components/comment/CommentForm';
import Comments from './components/comment/Comments';
import DoubleDamageFrom from './components/DoubleDamageFrom';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState<DoubleDamageFromArray>([]);
  const [pokeId, setPokemonId] = useState<number | null>(null);
  const [comments, setComments] = useState<Comment | null>(null);
  
  return (
    <div className="App">
      <Input setDoubleDamageFrom={setDoubleDamageFrom} setPokeId={setPokemonId}/>
      <DoubleDamageFrom doubleDamageTo={doubleDamageFrom} />
      {/*  TODO: Enable comments after dockering backend */}
      {/*<CommentForm pokeId={pokeId} setComments={setComments} isSearchDone={pokeId ? true : false}/>*/}
      {/*<Comments pokeId={pokeId} comments={comments} setComments={setComments} />*/}
    </div>
  );
}

export default App;
