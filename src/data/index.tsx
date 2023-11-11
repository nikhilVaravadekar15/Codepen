/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Extension } from '@codemirror/state'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { darcula } from '@uiw/codemirror-theme-darcula'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { material, materialDark, materialLight } from '@uiw/codemirror-theme-material'

export const htmlStarterCode: string = `<a 
  target="_blank"
  href="https://github.com/nikhilVaravadekar15/Codepen"
  >
  Github / Codepen
</a>
`

export const cssStarterCode: string = `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  font-synthesis: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    letter-spacing: 4px;
    text-transform: none;
    text-decoration: none;
  }
`
export const jsStarterCode: string = `// open browser console to view logs
console.log("hello world");
`

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
