/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type TExternalScriptsSlice = {
    externalScriptsSlice: TExternalScripts
}

export type TExternalScripts = {
    externalScripts: string;
}

export const externalScriptsSlice = createSlice({
    name: "externalScripts",
    initialState: {
        externalScripts: ""
    },
    reducers: {
        setExternalScripts: (state: TExternalScripts, action: { payload: any; type: string; }) => {
            const { externalScripts }: TExternalScripts = action.payload
            state.externalScripts = externalScripts
        }
    }
})

// Action creators are generated for each case reducer function
export const { setExternalScripts } = externalScriptsSlice.actions

export default externalScriptsSlice.reducer
