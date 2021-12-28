import AppState from "../../App.state";
import {createSelector} from "@reduxjs/toolkit";


export const selectClockSelectorState = (state: AppState) => state.clock;

export const selectClock = createSelector(
    selectClockSelectorState,
    state => state.clock,
);
