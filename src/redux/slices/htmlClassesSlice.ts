/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type THtmlClassesSlice = {
    htmlClassesSlice: THtmlClasses
}

export type THtmlClasses = {
    htmlClasses: string;
}

export const htmlClassesSlice = createSlice({
    name: "htmlClasses",
    initialState: {
        htmlClasses: ""
    },
    reducers: {
        setHtmlClasses: (state: THtmlClasses, action: { payload: any; type: string; }) => {
            const { htmlClasses }: THtmlClasses = action.payload
            state.htmlClasses = htmlClasses
        }
    }
})

// Action creators are generated for each case reducer function
export const { setHtmlClasses } = htmlClassesSlice.actions

export default htmlClassesSlice.reducer
