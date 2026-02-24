import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext);

    const handleClick = () => {
        countCtx?.setOnlineCount(0);
    }

    return (
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <button className="bg-blue-500 rounded p-3" onClick={handleClick}>Banir todo mundo</button>
        </>
    );
}