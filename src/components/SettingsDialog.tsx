/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    AiFillSetting
} from "react-icons/ai";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "./ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { fonts, themes } from '../data';
import { useDispatch, useSelector } from "react-redux";
import { TThemeSlice, setTheme } from "../redux/slices/themeSlice";
import { TFontSizeSlice, setFontsize } from "../redux/slices/fontSizeSlice";
import { THeadSlice, setHead } from "../redux/slices/headSlice";
import { THtmlClassesSlice, setHtmlClasses } from "../redux/slices/htmlClassesSlice";
import { TStyleSheetsSlice, setStyleSheets } from "../redux/slices/styleSheetsSlice";
import { TExternalScriptsSlice, setExternalScripts } from "../redux/slices/externalScriptsSlice";

function SettingsDialog() {
    const dispatch = useDispatch()
    const theme = useSelector<TThemeSlice>(state => state?.themeSlice?.theme)
    const fontsize = useSelector<TFontSizeSlice>(state => state?.fontSizeSlice?.fontsize)
    const head = useSelector<THeadSlice>(state => state?.headSlice?.head)
    const htmlClasses = useSelector<THtmlClassesSlice>(state => state?.htmlClassesSlice?.htmlClasses)
    const styleSheets = useSelector<TStyleSheetsSlice>(state => state?.styleSheetsSlice?.styleSheets)
    const externalScripts = useSelector<TExternalScriptsSlice>(state => state?.externalScriptsSlice?.externalScripts)

    return (
        <Dialog>
            <DialogTrigger
                className="h-full border py-2 px-3.5 rounded-md bg-[#444857] transition-colors duration-300 hover:bg-[#5a5f73]"
            >
                <AiFillSetting
                    size="1.25rem"
                    className="text-slate-50"
                />
            </DialogTrigger>
            <DialogContent className="max-w-xl h-[32rem] text-white flex flex-col bg-[#060606]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Settings</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="html" className="w-full h-full">
                    <TabsList className="w-full flex justify-evenly bg-slate-900">
                        <TabsTrigger className="w-full" value="html">HTML</TabsTrigger>
                        <TabsTrigger className="w-full" value="css">CSS</TabsTrigger>
                        <TabsTrigger className="w-full" value="js">Javascript</TabsTrigger>
                        <TabsTrigger className="w-full" value="editor">Editor</TabsTrigger>
                    </TabsList>
                    <>
                        <TabsContent value="html" className="flex flex-col gap-4">
                            <>
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">{"Add Class(es) to <html>"}</div>
                                    <div className="h-10 border rounded-md">
                                        <input
                                            type="text"
                                            value={htmlClasses as string}
                                            onChange={(event: any) => dispatch(setHtmlClasses({ htmlClasses: event.target.value }))}
                                            placeholder="e.g. single post post-1234"
                                            className="px-2 h-full w-full text-black rounded-md outline-none border-none focus:outline-none focus:border-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">{"Stuff for <head>"}</div>
                                    <textarea
                                        rows={9}
                                        value={head as string}
                                        onChange={(event: any) => dispatch(setHead({ head: event.target.value }))}
                                        placeholder="e.g. <meta>, <link>, <script>"
                                        className="px-2 resize-none h-full w-full text-black rounded-md outline-none border-none focus:outline-none focus:border-none"
                                    />
                                </div>
                            </>
                        </TabsContent>
                        <TabsContent value="css">
                            <>
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Add External Stylesheets</div>
                                    <textarea
                                        rows={9}
                                        value={styleSheets as string}
                                        onChange={(event: any) => dispatch(setStyleSheets({ styleSheets: event.target.value }))}
                                        placeholder={`e.g. <link rel="stylesheet" href="style.css">`}
                                        className="px-2 resize-none h-full w-full text-black rounded-md outline-none border-none focus:outline-none focus:border-none"
                                    />
                                </div>
                            </>
                        </TabsContent>
                        <TabsContent value="js">
                            <>
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Add External Scripts</div>
                                    <textarea
                                        rows={9}
                                        value={externalScripts as string}
                                        onChange={(event: any) => dispatch(setExternalScripts({ externalScripts: event.target.value }))}
                                        placeholder={`e.g. <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>`}
                                        className="px-2 resize-none h-full w-full text-black rounded-md outline-none border-none focus:outline-none focus:border-none"
                                    />
                                </div>
                            </>
                        </TabsContent>
                        <TabsContent value="editor" className="w-full h-[88%] flex flex-col items-center justify-between">
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Font size:</div>
                                    <Select
                                        onValueChange={(value: string) => dispatch(setFontsize({ fontsize: parseInt(value) }))}
                                    >
                                        <SelectTrigger className="w-full text-white">
                                            <SelectValue
                                                placeholder={`${fontsize}px`}
                                                className="text-white"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                fonts.map((font, index) => {
                                                    return (
                                                        <SelectItem
                                                            key={index}
                                                            value={`${font.value}`}
                                                        >
                                                            {font.name}
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Theme:</div>
                                    <Select
                                        onValueChange={(value: string) => dispatch(setTheme({ theme: value }))}
                                    >
                                        <SelectTrigger className="w-full text-white">
                                            <SelectValue
                                                placeholder={`${theme}`}
                                                className="text-white"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                themes.map((theme, index) => {
                                                    return (
                                                        <SelectItem value={theme.name} key={index}>{theme.name}</SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </TabsContent>
                    </>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog
