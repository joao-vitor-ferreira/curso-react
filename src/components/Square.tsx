import { useEffect } from "react";

export const Square = () => {
    const uid = crypto.randomUUID();
    const monitoringScroll = () => {
        console.log('monitorando scroll' + uid);
    }
    useEffect(() => {
        window.addEventListener('scroll', monitoringScroll);
        return () => {
            window.removeEventListener('scroll', monitoringScroll);
        }
    });

    return (
        <div className="bg-red-400 w-40 h-2000">
        </div>
    );
}