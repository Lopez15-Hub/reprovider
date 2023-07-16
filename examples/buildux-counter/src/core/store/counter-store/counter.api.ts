import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { Buildux } from "../../../../../../src/core/redux/buildux";

export const counterApi = Buildux.createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
