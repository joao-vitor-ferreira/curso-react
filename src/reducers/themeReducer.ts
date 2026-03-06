import { Theme } from "@/types/Theme";

export const DARK = '#000';
export const LIGHT = '#FFF';

type ChangeAction = {
    type: string;
}

export type ThemeActions = ChangeAction;

export const themeReducer = (theme: Theme, action: ThemeActions) => {
    switch(action.type){
        case 'dark':
            return {
                backgroundColor: DARK,
                color: LIGHT
            };
        case 'light':
            return {
                backgroundColor: LIGHT,
                color: DARK
            };
        default:
            return {
                backgroundColor: DARK,
                color: LIGHT
            }
    }
}