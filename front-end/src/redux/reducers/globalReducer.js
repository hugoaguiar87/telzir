import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "GlobalStates",
    initialState: {
        callFrom: '',
        callTo: '',
        minutes: '',
        showSimulation: false
    },
    reducers: {
        setCallFrom: (state, action) => {
            state.callFrom = action.payload
        },
        setCallTo: (state, action) => {
            state.callTo = action.payload
        },
        setMinutes: (state, action) => {
            state.minutes = action.payload
        },
        setShowSimulation: (state, action) => {
            state.showSimulation = action.payload
        }
    }
})

export const { setCallFrom, setCallTo, setMinutes, setShowSimulation } = slice.actions
export default slice.reducer