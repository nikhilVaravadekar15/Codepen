import {
    AiOutlineCodepen,
    AiOutlineDownload,
    AiOutlineFullscreen,
    AiOutlineFullscreenExit
} from "react-icons/ai";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip"
import SettingsDialog from "./SettingsDialog";
import useFullscreen from '../hooks/useFullscreen';

function Header({ doc }: { doc: string }) {
    const { toggle, fullscreen } = useFullscreen();

    return (
        <div className="p-2 h-full w-full flex items-center justify-between border-b-2 border-slate-800">
            <div className="flex gap-1 items-center justify-between cursor-pointer">
                <AiOutlineCodepen size="2.5rem" className="text-white" />
                <h2 className="text-xl font-bold text-white">Codepen</h2>
            </div>
            <div className="flex gap-2 items-center justify-between">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger
                            onClick={() => {
                                const element = document.createElement("a");
                                const file = new Blob([doc], { type: 'text/html' });
                                element.href = URL.createObjectURL(file);
                                element.download = "mycodepen.html";
                                document.body.appendChild(element); // Required for this to work in FireFox
                                element.click();
                            }}
                            className="h-full border py-2 px-3.5 rounded-md bg-[#444857] transition-colors duration-300 hover:bg-[#5a5f73]"
                        >
                            <AiOutlineDownload
                                size="1.25rem"
                                className="text-slate-50"
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Download your codepen</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
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
                <SettingsDialog />
            </div>
        </div >
    )
}

export default Header
