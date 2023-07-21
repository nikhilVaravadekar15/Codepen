/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'
import { Extension } from '@codemirror/state'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { themes } from '../../data';

export type TThemeSlice = {
    themeSlice: TTheme
}

export type TTheme = {
    theme: string;
}

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "vscodeDark"
    },
    reducers: {
        setTheme: (state: TTheme, action: { payload: any; type: string; }) => {
            const { theme }: TTheme = action.payload
            state.theme = theme
        }
    }
})

export function getTheme(value: string): Extension {
    let theme: Extension = vscodeDark
    for (let index = 0; index < themes.length; index++) {
        const element = themes[index];
        if (value === element.name) {
            theme = element.value
        }
    }
    return theme
}

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
