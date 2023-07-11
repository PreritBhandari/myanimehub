import { combineReducers } from '@reduxjs/toolkit';
import { reducer as animeAdditionReducer } from '../slices/animeAdditionSlice';
import { reducer as myAnimeListReducer } from '../slices/mylistSlice'

const appReducer = combineReducers({
    /**
     * All the reducers
     * that needs to be combined
     * will be added here
     */

    animeOverview: animeAdditionReducer,
    myAnimeList: myAnimeListReducer
});

const rootReducer = (state, action) => {
    // // Clear all data in redux store to initial.
    // if(action.type === "reset")
    //    state = undefined;

    return appReducer(state, action);
};

export default rootReducer;

