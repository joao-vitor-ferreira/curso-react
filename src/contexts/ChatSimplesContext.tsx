import { ChatSimplesActions, chatSimplesReducer } from "@/reducers/chatSimplesReducer";
import { ChatSimples } from "@/types/ChatSimples";
import { createContext, Dispatch, ReactNode, useReducer, useState } from "react";

type ChatSimplesContextType = {
    conversa: ChatSimples[];
    dispatch: Dispatch<ChatSimplesActions>
};

export const ChatSimplesContext = createContext<ChatSimplesContextType|null>(null);

export const ChatSimplesProvider = ({ children }: { children: ReactNode }) => {
    const [conversa, dispatch] = useReducer(chatSimplesReducer, [])

    return(
        <ChatSimplesContext.Provider
            value={{ conversa, dispatch }}
        >
            {children}
        </ChatSimplesContext.Provider>
    );
}