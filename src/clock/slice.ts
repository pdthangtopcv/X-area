import {createSlice} from "@reduxjs/toolkit";
import {ClockState} from "./state";

const clockSlice = createSlice({
    name: 'clock',
    initialState: {...new ClockState()},
    reducers: {
        resetClock(state: ClockState) {
            state.clock = 5;
        },
        ticking(state: ClockState) {
            state.clock -= 1;
        }
    }
});

export const {resetClock, ticking} = clockSlice.actions;

export default clockSlice.reducer;
