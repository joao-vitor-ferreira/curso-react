import { ChatSimplesContext } from "@/contexts/ChatSimplesContext"
import { useContext } from "react"

export const useChatSimples = () => {
    const chatSimplesContext = useContext(ChatSimplesContext);

    if(!chatSimplesContext) {
        throw new Error('useChatSimples must be used within a ChatSimplesProvider')
    }

    return chatSimplesContext;
}