import ReactCodeMirror from '@uiw/react-codemirror'
import { Extension } from '@codemirror/state'
import { LanguageSupport } from '@codemirror/language'

export type TCodePlaygroundProps = {
    header: JSX.Element
    theme: Extension
    fontsize: number
    languageSupport: LanguageSupport
    code: string
    codeHandler: React.Dispatch<React.SetStateAction<string>>
}

function CodePlayground(
    { header, theme, fontsize, languageSupport, code, codeHandler }: TCodePlaygroundProps
) {

    return (
        <div className="h-full w-full mx-auto flex flex-col">
            <div className="w-full flex items-center justify-between bg-[#060606]">
                <div className="flex gap-1 items-center text-gray-500">
                    <button className="h-full flex cursor-pointer items-center focus:outline-none bg-gray-600 hover:bg-gray-700 px-2 py-1.5 font-medium">
                        <div className="flex gap-2 items-center justify-center px-1">
                            {header}
                        </div>
                    </button>
                </div>
                <div></div>
            </div>
            <div className="h-full w-full overflow-hidden">
                <ReactCodeMirror
                    value={code}
                    theme={theme}
                    height="100%"
                    style={{
                        fontSize: fontsize
                    }}
                    extensions={[languageSupport]}
                    onChange={(code: string) => codeHandler(code)}
                    className="h-full w-full overflow-auto"
                />
            </div>
        </div>
    )
}

export default CodePlayground
