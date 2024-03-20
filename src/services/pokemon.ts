// import { createApi } from "@reduxjs/toolkit/query"

/* react-specific entry point; automatically generates hooks for the endpoints
we define */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// defining a SINGLE api slice object
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  
  // baseQuery is simply the baseUrl —— we're building the string here...
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  
  // ...and 'endpoints' is our options and request types
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (pokemonName) => `pokemon/${pokemonName}`,
    }),
    getMoveDetailsByName: builder.query({
      query: (moveName) => `move/${moveName}`
    })
  }),
});

// naming convention is use<endpointName>Query
export const { useGetPokemonByNameQuery, useGetMoveDetailsByNameQuery } = pokemonApi;
