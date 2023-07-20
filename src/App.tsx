/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './App.css'
import {
  DiHtml5,
  DiCssTricks,
  DiJavascript1
} from 'react-icons/di'
import React, { useEffect } from 'react'
import Split from 'react-split'
import Header from './components/Header'
import { css as cssCode } from '@codemirror/lang-css'
import { html as htmlCode } from '@codemirror/lang-html'
import { javascript as jsCode } from '@codemirror/lang-javascript'
import { themes } from './data/index'
import { Extension } from '@codemirror/state'
import CodePlayground from './components/CodePlayground'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { ThemeContext } from './context/settings/theme'
import { FonstSizeContext } from './context/settings/fontsize'


function App() {
  const [theme, setTheme] = React.useState<string>('vscodeDark')
  const [fontsize, setFontsize] = React.useState<number>(16);
  const [css, setCss] = React.useState<string>("")
  const [html, setHtml] = React.useState<string>("")
  const [js, setJs] = React.useState<string>("")
  const [srcDoc, setSrcDoc] = React.useState<string>("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body>${html}</body>
            <script>${js}</script>
          </html>
        `)
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js])

  function handleTheme(value: string) {
    setTheme(value)
  }

  function handleFontSize(value: number) {
    setFontsize(value)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <FonstSizeContext.Provider value={{ fontsize, handleFontSize }}>
        <main className="h-screen w-screen flex flex-col overflow-hidden">
          <div className="h-14 bg-[#060606]">
            <Header />
          </div>
          <Split
            minSize={0}
            direction="vertical"
            className="h-full w-full"
          >
            <Split
              minSize={40}
              direction="horizontal"
              className="split h-full w-full overflow-hidden bg-white"
            >
              <div>
                <CodePlayground
                  header={
                    <>
                      <DiHtml5 size="1.25rem" className="text-red-500" />
                      <div className="text-xs text-white">HTML</div>
                    </>
                  }
                  fontsize={fontsize}
                  theme={getTheme(theme)}
                  languageSupport={htmlCode()}
                  code={html}
                  codeHandler={setHtml}
                />
              </div>
              <div>
                <CodePlayground
                  header={
                    <>
                      <DiCssTricks size="1.25rem" className="text-blue-500" />
                      <div className="text-xs text-white">CSS</div>
                    </>
                  }
                  fontsize={fontsize}
                  theme={getTheme(theme)}
                  languageSupport={cssCode()}
                  code={css}
                  codeHandler={setCss}
                />
              </div>
              <div>
                <CodePlayground
                  header={
                    <>
                      <DiJavascript1 size="1.25rem" className="text-yellow-500" />
                      <div className="text-xs text-white">JS</div>
                    </>
                  }
                  fontsize={fontsize}
                  theme={getTheme(theme)}
                  languageSupport={jsCode()}
                  code={js}
                  codeHandler={setJs}
                />
              </div>
            </Split>
            <div className="h-full w-full">
              <iframe
                srcDoc={srcDoc}
                className="h-full w-full"
                seamless={true}
                allowFullScreen
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
              />
            </div>
          </Split>
        </main>
      </FonstSizeContext.Provider>
    </ThemeContext.Provider>
  )
}

function getTheme(value: string): Extension {
  let theme: Extension = vscodeDark
  for (let index = 0; index < themes.length; index++) {
    const element = themes[index];
    if (value === element.name) {
      theme = element.value
    }
  }
  return theme
}


export default App
