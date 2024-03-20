// DESC: Redux store creation & configuration

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { pokemonApi } from "../services/pokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    
    // add the reducer from 'pokemon.ts' as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  
  // getDefaultMiddleware often shortened to 'gDM'
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
});

// optional for this. Provides refetchOnFocus and refetchOnReconnect functionality.
// can take a second arg for customization
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
