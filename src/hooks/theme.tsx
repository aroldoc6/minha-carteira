import React, {createContext, useState, useContext} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/Light';

interface IThemeContext {
    toggleTheme():void;
    theme:ITheme;
}

interface ITheme {
    title: string;

    colors:{
        primary: string;
        secundary:string;
        tertiary:string;


        white:string;
        black:string;
        gray:string;

        success:string;
        info:string;
        warning:string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC <{ children: React.ReactNode }> = ( {children } ) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@minha-carteira:thema');

        if(themeSaved){
            return JSON.parse(themeSaved);
        }else{
            return dark;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@minha-carteira:thema',JSON.stringify(light));
        }else{
            setTheme(dark);
            localStorage.setItem('@minha-carteira:thema',JSON.stringify(dark));
        }
};
    return(
        <ThemeContext.Provider value={{ toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme():IThemeContext{
    const context = useContext(ThemeContext);

    return context;
}

export {ThemeProvider, useTheme};
