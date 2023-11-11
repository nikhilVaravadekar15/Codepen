/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type TFontSizeSlice = {
    fontSizeSlice: TFontSize
}

export type TFontSize = {
    fontsize: number;
}

export const fontSizeSlice = createSlice({
    name: "fontsize",
    initialState: {
        fontsize: 16
    },
    reducers: {
        setFontsize: (state: TFontSize, action: { payload: any; type: string; }) => {
            const { fontsize }: TFontSize = action.payload
            state.fontsize = fontsize
        }
    }
})

// Action creators are generated for each case reducer function
export const { setFontsize } = fontSizeSlice.actions

export default fontSizeSlice.reducer
