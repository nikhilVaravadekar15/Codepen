/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    AiFillSetting,
    AiOutlineCodepen,
    AiOutlineFullscreen,
    AiOutlineFullscreenExit
} from "react-icons/ai";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import React from "react";
import { fonts, themes } from '../data';
import { useFullscreen } from '@mantine/hooks';
import { FonstSizeContext, TFontSize } from "../context/settings/fontsize";
import { TTheme, ThemeContext } from "../context/settings/theme";

function Header() {
    const { toggle, fullscreen } = useFullscreen();
    const themeSetting = React.useContext<TTheme | null>(ThemeContext);
    const fontsizeSetting = React.useContext<TFontSize | null>(FonstSizeContext);

    return (
        <div className="p-2 h-full w-full flex items-center justify-between border-b-2 border-slate-800">
            <div className="flex gap-1 items-center justify-between">
                <AiOutlineCodepen size="2.5rem" className="text-white" />
                <h2 className="text-xl font-bold text-white">Codepen</h2>
            </div>
            <div className="flex gap-2 items-center justify-between">
                <TooltipProvider>
                    <Tooltip>
                        {
                            !fullscreen ? (
                                <>
                                    <TooltipTrigger
                                        onClick={toggle}
                                        className="h-full border py-2 px-3.5 rounded-md bg-[#444857] transition-colors duration-300 hover:bg-[#5a5f73]"
                                    >
                                        <AiOutlineFullscreen
                                            size="1.25rem"
                                            className="text-slate-50"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Enter Full Screen</p>
                                    </TooltipContent>
                                </>
                            ) : (
                                <>
                                    <TooltipTrigger
                                        onClick={toggle}
                                        className="h-full border py-2 px-3.5 rounded-md bg-[#444857] transition-colors duration-300 hover:bg-[#5a5f73]"
                                    >
                                        <AiOutlineFullscreenExit
                                            size="1.25rem"
                                            className="text-slate-50"
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Exit Full Screen</p>
                                    </TooltipContent>
                                </>
                            )
                        }
                    </Tooltip>
                </TooltipProvider>
                <Dialog>
                    <DialogTrigger
                        className="h-full border py-2 px-3.5 rounded-md bg-[#444857] transition-colors duration-300 hover:bg-[#5a5f73]"
                    >
                        <AiFillSetting
                            size="1.25rem"
                            className="text-slate-50"
                        />
                    </DialogTrigger>
                    <DialogContent className="text-white bg-slate-900">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">Settings</DialogTitle>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Font size:</div>
                                    <Select
                                        onValueChange={(value: string) => fontsizeSetting?.handleFontSize(parseInt(value))}
                                    >
                                        <SelectTrigger className="w-full text-white">
                                            <SelectValue
                                                placeholder={`${fontsizeSetting?.fontsize!}px`}
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
                                <div className="flex flex-col gap-2">
                                    <div className="text-base font-bold text-white">Theme:</div>
                                    <Select
                                        onValueChange={(value: string) => themeSetting?.handleTheme(value)}
                                    >
                                        <SelectTrigger className="w-full text-white">
                                            <SelectValue
                                                placeholder={`${themeSetting?.theme!}`}
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
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div >
    )
}

export default Header
