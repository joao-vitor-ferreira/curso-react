import { ListActions, listRedeucer } from "@/reducers/ListReducer";
import { useReducer, useState } from "react";

// type Props = {
//     list: Item[],
//     dispatch: (action: ListActions) => void
// }

export const TodoItems = (/*{ list, dispatch }: Props*/) => {
    const [list, dispatch] = useReducer(listRedeucer, []);
    const [itemInput, setItemInput] = useState('');

    const handleAddClick = () => {
        if(itemInput.trim() === '') return false;

        dispatch({
            type: 'add',
            payload: {
                text: itemInput
            }
        });

        setItemInput('');
        document.getElementById('input-text')?.focus();
    }

    const handleClickEditar = (id: string) => {
        const item = list.find(it => it.id === id);
        
        if(!item) return false;
        const newText = window.prompt('Editar Tarefa', item.text);
        if(!newText || !newText.trim()) return false;

        dispatch({
            type: 'editText',
            payload: {
                id: id,
                newText: newText
            }
        })
    }

    const toggleDone = (id: string, done: boolean) => {
        console.log('disparou');
        dispatch({
            type: 'toggleDone',
            payload: {
                id: id,
                done: done
            }
        })
    }

    const handleClickRemove = (id: string) => {
        dispatch({
            type: 'remove',
            payload: {
                id: id
            }
        });
    }

    return (
        <div className="w-scren h-screen flex flex-col items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de tarefas</h1>

            <div className="flex flex-wrap w-full max-w-lg my-3 p-4 rounded-md bg-gray-500 border-2 border-gray-700">
                <input 
                    type="text"
                    placeholder="O que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                    value={itemInput}
                    onChange={e => setItemInput(e.currentTarget.value)}
                    id="input-text"
                />

                <button onClick={handleAddClick}>Adicionar</button>
                <p className="my-4">
                {list.length <= 0 && 'nenhum item '}
                {list.length === 1 && '1 item '}
                {list.length > 1 && list.length + ' itens '}
                na lista</p>
                <ul className="w-full max-w-lg list-disc">
                    {list.map((item) => (
                        <li 
                            key={item.id}
                            className="flex py-3 my-3 border-b border-gray-788 justify-between"
                        >
                            <div>
                                <input type="checkbox" className="max-w-6 min-w-6 mr-3" checked={item.done} onChange={() => {toggleDone(item.id, !item.done)}}/>
                                <span className="mr-3">{item.text}</span>
                            </div>
                            <div className="flex flex-nowrap">
                                <button
                                    className="mr-2 text-black hover:text-gray justify-self-end-safe"
                                    onClick={() => handleClickEditar(item.id)}
                                >Editar
                                </button>
                                <button
                                    onClick={() => handleClickRemove(item.id)}
                                    className="text-black hover:text-gray justify-self-end-safe"
                                >Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}