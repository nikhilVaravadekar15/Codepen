import { Extension } from '@codemirror/state'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { darcula } from '@uiw/codemirror-theme-darcula'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { material, materialDark, materialLight } from '@uiw/codemirror-theme-material'

export const fonts: Array<{ name: string, value: number }> = [
    {
        name: "14px",
        value: 14
    },
    {
        name: "15px",
        value: 15
    },
    {
        name: "16px",
        value: 16
    },
    {
        name: "17px",
        value: 17
    },
    {
        name: "18px",
        value: 18
    },
    {
        name: "19px",
        value: 19
    },
    {
        name: "20px",
        value: 20
    }
]

export const themes: Array<{ name: string, value: Extension }> = [
    {
        name: "sublime",
        value: sublime
    },
    {
        name: "dracula",
        value: dracula
    },
    {
        name: "darcula",
        value: darcula
    },
    {
        name: "vscodeDark",
        value: vscodeDark
    },
    {
        name: "androidstudio",
        value: androidstudio
    },
    {
        name: "githubDark",
        value: githubDark
    },
    {
        name: "githubLight",
        value: githubLight
    },
    {
        name: "material",
        value: material
    },
    {
        name: "materialDark",
        value: materialDark
    },
    {
        name: "materialLight",
        value: materialLight
    },
]
