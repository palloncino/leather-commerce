"use client"
import { useTheme } from '@/state/theme-context';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Current Theme: {theme} (click to toggle)
        </button>
    );
}