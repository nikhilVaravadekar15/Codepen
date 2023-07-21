/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
import { useSelector } from 'react-redux'
import { css as cssCodemirror } from '@codemirror/lang-css'
import { html as htmlCodemirror } from '@codemirror/lang-html'
import { javascript as jsCodemirror } from '@codemirror/lang-javascript'
import CodePlayground from './components/CodePlayground'
import { THeadSlice } from './redux/slices/headSlice'
import { TFontSizeSlice } from './redux/slices/fontSizeSlice'
import { TThemeSlice, getTheme } from './redux/slices/themeSlice'
import { THtmlClassesSlice } from './redux/slices/htmlClassesSlice'
import { TStyleSheetsSlice } from './redux/slices/styleSheetsSlice'
import { TExternalScriptsSlice } from './redux/slices/externalScriptsSlice'


function App() {

  const [css, setCss] = React.useState<string>("")
  const [html, setHtml] = React.useState<string>("")
  const [js, setJs] = React.useState<string>("")
  const [srcDoc, setSrcDoc] = React.useState<string>("")

  const theme = useSelector<TThemeSlice>(state => state?.themeSlice?.theme)
  const fontsize = useSelector<TFontSizeSlice>(state => state?.fontSizeSlice?.fontsize)
  const head = useSelector<THeadSlice>(state => state?.headSlice?.head)
  const htmlClasses = useSelector<THtmlClassesSlice>(state => state?.htmlClassesSlice?.htmlClasses)
  const styleSheets = useSelector<TStyleSheetsSlice>(state => state?.styleSheetsSlice?.styleSheets)
  const externalScripts = useSelector<TExternalScriptsSlice>(state => state?.externalScriptsSlice?.externalScripts)

  useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  useEffect(() => {
    const outputTimeout = setTimeout(() => {
      setSrcDoc(`
          <!DOCTYPE html>
          <html class="${htmlClasses as string}">
            <head>
              ${head as string}
              ${styleSheets as string}
              <style>${css}</style>
            </head>
            <body>${html as string}</body>
            ${externalScripts as string}
            <script>${js}</script>
          </html>
        `)
    }, 250);

    return () => {
      clearTimeout(outputTimeout);
    }
  }, [html, css, js, head, htmlClasses, styleSheets, externalScripts])

  return (
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
              fontsize={fontsize as number}
              theme={getTheme(theme as string)}
              languageSupport={htmlCodemirror()}
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
              fontsize={fontsize as number}
              theme={getTheme(theme as string)}
              languageSupport={cssCodemirror()}
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
              fontsize={fontsize as number}
              theme={getTheme(theme as string)}
              languageSupport={jsCodemirror()}
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
  )
}

export default App
