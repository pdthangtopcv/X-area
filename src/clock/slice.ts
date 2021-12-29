import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ClockState} from "./state";
import {SocketAction} from "../config/socketAction";

const clockSlice = createSlice({
    name: 'clock',
    initialState: {...new ClockState()},
    reducers: {
        resetClock(state: ClockState, {payload}: PayloadAction<number>) {
            state.clock = payload;
            state.status = true;
        },
        ticking(state: ClockState) {
            state.clock -= 1;
        }
    },
    extraReducers: {
        [SocketAction.startClock]: (state: ClockState, {payload}: PayloadAction<any>) => {
            console.log(payload);
            state.clock = payload;
            state.status = true;
        },

    }
});

export const {resetClock, ticking} = clockSlice.actions;

export default clockSlice.reducer;
