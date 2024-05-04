export type RootLayoutProps = {
  children: any;
};

export interface AppContextType {
  theme: string; // 'light' or 'dark'
  toggleTheme: () => void; // Function to toggle the theme
}
