import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Agent from '../agent/agent';
import { empty_pagination } from '../../src/constants';
import { API } from 'aws-amplify';

const initialState = {
    loading: false,
    pagination: { pages: 0 },
    errors: {},
    redirectTo: null,
    myAnimeList: []
};

/**
 * Fetches and handles all the chain overviews
 */
export const getMyList = createAsyncThunk(
    'mylist/anime/get',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await API.graphql(payload);;
            return data;
        } catch (err) {
            let error = err;
            if (!error.response) {
                return rejectWithValue({ errors: { [err.name]: err.message } });
            }
            return rejectWithValue(error.response.body);
        }
    }
);

// export const getMyListSelected = createAsyncThunk(
//     'mylistselected/anime/get',
//     async (payload, { rejectWithValue }) => {
//         try {
//             const { data } = await API.graphql(payload);;
//             return data?.payload;
//         } catch (err) {
//             let error = err;
//             if (!error.response) {
//                 return rejectWithValue({ errors: { [err.name]: err.message } });
//             }
//             return rejectWithValue(error.response.body);
//         }
//     }
// );

const animeMyListSlice = createSlice({
    name: 'myAnimeList',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
        },
        // reset: () => initialState
    },
    extraReducers: {
        // these are the actions generated by the above createAsyncThunk of redux/toolkit

        [getMyList.pending]: (state) => {
            state.loading = true;
            state.success = false;
        },

        [getMyList.fulfilled]: (state, action) => {
            state.loading = false;
            // if (action?.payload) {
            state.myAnimeList = action?.payload || console.log("action",action);
            state.pagination = action?.payload?.pagination || empty_pagination;
            // }
        },

        [getMyList.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action?.payload?.message || 'Something went wrong';
            state.success = false;
        },


        // [getMyListSelected.pending]: (state) => {
        //     state.loading = true;
        //     state.success = false;
        // },

        // [getMyListSelected.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     // if (action?.payload) {
        //     state.myAnimeList = action?.payload?.data || console.log(action);
        //     state.pagination = action?.payload?.pagination || empty_pagination;
        //     // }
        // },

        // [getMyListSelected.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.errors = action?.payload?.message || 'Something went wrong';
        //     state.success = false;
        // },


    },
});

export const animeMyListSelector = (state) => state.myAnimeList;

export const { reducer, actions } = animeMyListSlice;

