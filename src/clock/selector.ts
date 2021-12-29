import AppState from "../../App.state";
import {createSelector} from "@reduxjs/toolkit";


export const selectClockSelectorState = (state: AppState) => state.clock;

export const selectClock = createSelector(
    selectClockSelectorState,
    state => state.clock,
);

export const selectStatusClock = createSelector(
    selectClockSelectorState,
    state => state.status,
)
