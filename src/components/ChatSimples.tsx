import { useChatSimples } from "@/hooks/useChatSimples";
import { useState } from "react";

export const ChatSimples = () => {
    const chatSimples = useChatSimples();
    const [inputIam, setInputIam] = useState('');
    const [inputBot, setInputBot] = useState('');

    const onPressKeyEnter = (e: any) => {
        if(e.key === 'Enter') {
            if(inputIam.trim() != '' ){
                chatSimples.dispatch({
                    type: 'add',
                    payload: {
                        texto: inputIam,
                        itsMe: true
                    }
                });
                setInputIam('');
            }

            if(inputBot.trim() != ''){
                chatSimples.dispatch({
                    type: 'add',
                    payload: {
                        texto: inputBot,
                        itsMe: false
                    }
                });
                setInputBot('');
            }

            scrollBottom();
        }
    }

    const scrollBottom = () => {
        const objDiv = document.getElementById("divScroll");
        if(objDiv){
            objDiv.scrollIntoView({behavior: "smooth"});
            objDiv.scrollTo({
                top: objDiv.scrollHeight,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="container mx-auto w-200 h-full">
            <div className="row bg-green-600 p-3 rounded w-full">
                <div id="divScroll" className="flex flex-wrap text-black w-full max-h-100 overflow-y-scroll">
                    { !chatSimples || !chatSimples?.conversa?.length && <div className="w-full m-2">
                        <span>Não há mensagens.</span>
                    </div> }
                    { chatSimples?.conversa?.map((item, i) => (
                        <div key={i+'-key'} className="w-full m-2">
                            <span className={`p-2 rounded bg-amber-300 ${!item.itsMe ? 'float-right' : 'float-left'}`}>{item.texto}</span>
                        </div>
                    )) }
                </div>
                <div className="mt-3 w-full flex flex-wrap">
                    <input
                        placeholder="Eu"
                        type="text"
                        name="iam"
                        className="border border-amber-800 rounded p-2 text-black w-full mb-3"
                        value={inputIam}
                        onChange={e => setInputIam(e.target.value)}
                        onKeyDown={onPressKeyEnter}
                    />
                    <input
                        placeholder="Bot"
                        type="text"
                        name="bot"
                        className="border border-amber-800 rounded p-2 text-black w-full"
                        value={inputBot}
                        onChange={e => setInputBot(e.target.value)}
                        onKeyDown={onPressKeyEnter}
                    />
                </div>
            </div>
        </div>
    );
}