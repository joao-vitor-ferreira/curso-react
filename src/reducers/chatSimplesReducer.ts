import { ChatSimples } from "@/types/ChatSimples";

type AddAction = {
    type: String;
    payload: {
        texto: string;
        itsMe: boolean;
    }
}

export type ChatSimplesActions = AddAction;

export const chatSimplesReducer = (conversa: ChatSimples[], action: ChatSimplesActions) => {
    switch (action.type) {
        case 'add':
            const newText: ChatSimples = {
                texto: action.payload.texto,
                itsMe: action.payload.itsMe,
            }
            return [...conversa, newText];
        default:
            return conversa;
    }
}