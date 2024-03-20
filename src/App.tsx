import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./app/features/counter/Counter";
import {
  useGetPokemonByNameQuery,
  useGetMoveDetailsByNameQuery,
} from "./services/pokemon";

function App() {
  const [count, setCount] = useState(0);
  const {
    data: pokemonData,
    error: pokemonError,
    isLoading: pokemonIsLoading,
  } = useGetPokemonByNameQuery("gengar-mega");
  const {
    data: moveData,
    error: moveError,
    isLoading: moveIsLoading,
  } = useGetMoveDetailsByNameQuery("fire-blast");

  return (
    <>
      <div>
        <h2>Counter component, redux toolkit:</h2>
        <Counter />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h2>RTK Query functionality:</h2>
      <div id="sprites">
        {pokemonError ? (
          <>Oh no, there was an error</>
        ) : pokemonIsLoading ? (
          <>Loading...</>
        ) : pokemonData ? (
          <>
            <text>(change pokemon and move in App.tsx)</text>
            <h5>{pokemonData.species.name}</h5>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.species.name}
            />
            <img
              src={pokemonData.sprites.front_shiny}
              alt={pokemonData.species.name}
            />
          </>
        ) : null}
      </div>
      <div id="move-info">
        {moveError ? (
          <>Oh no, there was an error</>
        ) : moveIsLoading ? (
          <>Loading...</>
        ) : moveData ? (
          <>
            <h5>{moveData.name}</h5>
            <text>
              damage: {moveData.power} | {moveData.type.name}
            </text>
            <br />
            <text>{moveData.flavor_text_entries[0].flavor_text}</text>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
