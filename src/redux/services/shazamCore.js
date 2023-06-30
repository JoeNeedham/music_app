import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', "c977122234msh8668a2a9fceb01ap1a69e2jsnd54aafbddeb3");

            return headers;

        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0'}),
        getTopCharts2: builder.query({ query: () => 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=21'}),
        getSongDetails: builder.query({ query: ({ songid }) => `songs/get-details?key=${songid}&locale=en-US` }),
        getSongRelated: builder.query({ query: () => `songs/list-recommendations?key=484129036&locale=en-US` }),
        getArtistDetails: builder.query({ query: (artistId) => `https://shazam.p.rapidapi.com/artists/get-details?id=${artistId}`}),

    }),
});

export const {
    useGetTopCharts2Query,
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi