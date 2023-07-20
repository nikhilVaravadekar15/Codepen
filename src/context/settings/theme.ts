import { createContext } from "react";
import { Extension } from '@codemirror/state'

export type TTheme = {
    theme: string;
    handleTheme: (value: string) => void;
}

export const ThemeContext = createContext<TTheme | null>(null);
