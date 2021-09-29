import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: headers });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: ({ limit, offset }) =>
        createRequest(`/coins?limit=${limit}&offset=${offset}`),
    }),
    getCryptoDetail: builder.query({
      query: (_id) => createRequest(`/coin/${_id}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ _id, period }) =>
        createRequest(`/coin/${_id}/history/${period}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
