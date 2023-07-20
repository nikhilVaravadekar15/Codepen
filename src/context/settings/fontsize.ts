import { createContext } from "react";

export type TFontSize = {
    fontsize: number;
    handleFontSize: (value: number) => void;
}

export const FonstSizeContext = createContext<TFontSize | null>(null);
