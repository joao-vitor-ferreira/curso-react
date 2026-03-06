import { DARK, LIGHT, ThemeActions, themeReducer } from "@/reducers/themeReducer";
import { Theme } from "@/types/Theme";
import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = 'themeContextContent';

type ThemeContextType = {
    theme: Theme;
    dispatch: Dispatch<ThemeActions>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, dispatch] = useReducer(themeReducer, {
        backgroundColor: DARK,
        color: LIGHT,
    });

    useEffect(() => {
        const storedTheme = window?.localStorage?.getItem(STORAGE_KEY);
        if (storedTheme && storedTheme !== 'undefined') {
            dispatch({ type: storedTheme });
        }
    }, []);

    useEffect(() => {
        window?.localStorage?.setItem(STORAGE_KEY, theme.backgroundColor === DARK ? 'dark' : 'light');
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme, dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}