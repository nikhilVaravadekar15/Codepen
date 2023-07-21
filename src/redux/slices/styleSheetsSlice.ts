/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type TStyleSheetsSlice = {
    styleSheetsSlice: TStyleSheets
}

export type TStyleSheets = {
    styleSheets: string;
}

export const styleSheetsSlice = createSlice({
    name: "styleSheets",
    initialState: {
        styleSheets: ""
    },
    reducers: {
        setStyleSheets: (state: TStyleSheets, action: { payload: any; type: string; }) => {
            const { styleSheets }: TStyleSheets = action.payload
            state.styleSheets = styleSheets
        }
    }
})

// Action creators are generated for each case reducer function
export const { setStyleSheets } = styleSheetsSlice.actions

export default styleSheetsSlice.reducer
