import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Agent from '../agent/agent';
// import { empty_pagination } from '../../constants/empty_pagination';

const initialState = {
    loading: false,
    pagination: { pages: 0 },
    errors: {},
    redirectTo: null,
    animeOverview: []
};

/**
 * Fetches and handles all the chain overviews
 */
export const getAnimeOverview = createAsyncThunk(
    'homepage/anime/get',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await Agent.HomePage.Animes.getByName(payload);
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

const animeAdditionSlice = createSlice({
    name: 'animeOverview',
    initialState,
    reducers: {
        setLoading(state) {
            state.loading = true;
        },
        // reset: () => initialState
    },
    extraReducers: {
        // these are the actions generated by the above createAsyncThunk of redux/toolkit

        [getAnimeOverview.pending]: (state) => {
            state.loading = true;
            state.success = false;
        },

        [getAnimeOverview.fulfilled]: (state, action) => {
            state.loading = false;
            // if (action?.payload) {
            state.animeOverview = action?.payload?.data || console.log(action);
            state.pagination = action?.payload?.pagination || empty_pagination;
            // }
        },

        [getAnimeOverview.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action?.payload?.message || 'Something went wrong';
            state.success = false;
        },


    },
});

export const animeAdditionSelector = (state) => state.animeOverview;

export const { reducer, actions } = animeAdditionSlice;
