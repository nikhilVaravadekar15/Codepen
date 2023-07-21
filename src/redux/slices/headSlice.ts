/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'

export type THeadSlice = {
    headSlice: THead
}

export type THead = {
    head: string;
}

export const headSlice = createSlice({
    name: "head",
    initialState: {
        head: ""
    },
    reducers: {
        setHead: (state: THead, action: { payload: any; type: string; }) => {
            const { head }: THead = action.payload
            state.head = head
        }
    }
})

// Action creators are generated for each case reducer function
export const { setHead } = headSlice.actions

export default headSlice.reducer
