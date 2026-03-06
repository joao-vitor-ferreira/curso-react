import { useEffect, useState } from "react"

const DARK = 'dark';
const LIGHT = 'light';

export const useTheme = () => {
    const [theme, setTheme] = useState(DARK);

    useEffect(() => {
        const current = document.documentElement.getAttribute('data-theme');
        if(current) setTheme(current);
    });

    const toggleTheme = () => {
        const newTheme = theme === DARK ? LIGHT : DARK;

        document.documentElement.setAttribute('data-theme', newTheme);
        window?.localStorage?.setItem('theme', newTheme);

        setTheme(newTheme);
    }

    return { theme, toggleTheme };
}