import { useEffect, useReducer, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { Square } from "./Square";
import { Item } from "@/types/Item";
import { listRedeucer } from "@/reducers/ListReducer";
import { TodoItems } from "./TodoItems";

export const Reducer = () => {

    return (
        <TodoItems/>
    );
}

export const UsandoCleanUp = () => {
    const [show, setShow] = useState(false);

    return(
        <div className="">
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
            {show && <Square />}
        </div>
    );
}

export const ExemploRealDoEffect = () => {
    const [playing, setPlaying] = useState(false);
    
    return (
        <div className="">
            <div className="border border-white p-3 mb-4">
                <p className="text-2xl text-blue-400 mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
                <button className="bg-blue-400 rounded p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Pause</button>
            </div>

            <VideoPlayer
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                isPlaying={playing}
            />
        </div>
    );
}

export const EffectClass2 = () => {
    const [firstName, setFirstName] = useState('aaaaa');
    const [lastName, setLastName] = useState('bbbbb');
    
    // FORMA CERTA
    const fullName = firstName + ' ' + lastName;

    /**
     * FORMA ERRADA
     */
    // useEffect(() => {
    //     setFullName(firstName + ' ' + lastName);
    // }, [firstName, lastName]);

    const handleClickPedro = () => {
        setFirstName('Pedro');
    }

    const handleClickJoao = () => {
        setLastName('Joao');
    }

    // const handlerClickAge = (new_age: number) => {
    //     setAge(new_age)
    // }

    return (
        <div>
            <input type="text" name="" id="" />
            <p> Meu nome e {fullName}</p>
            <hr />
            <button className="border border-blue-300 m-3 p-3" onClick={handleClickPedro} type="button">Mudar para pedro</button>
            <button className="border border-blue-300 m-3 p-3" onClick={handleClickJoao}>Mudar para joao</button>
            
            <hr />

            {/* <button className="border border-blue-300 m-3 p-3" onClick={() => {handlerClickAge(10)}} >Idade 10</button>
            <button className="border border-blue-300 m-3 p-3" onClick={() => {handlerClickAge(90)}} >Idade 90</button> */}
        </div>
    );
}

export const EffectClass1 = () => {
    const [name, setName] = useState('Joao');
    const [age, setAge] = useState(90);

    /**
     * 1. Definicao da funcao que vai rodar
     * 2. Definicao de quando vai rodar
     * 3. Definicao do que fazer quando o componente sumir/unload
     */
    useEffect(() => {
        console.log('rodou o effect');
    }, [age]);

    const handleClickPedro = () => {
        setName('Pedro');
    }

    const handleClickJoao = () => {
        setName('Joao');
    }

    const handlerClickAge = (new_age: number) => {
        setAge(new_age)
    }

    return (
        <div>
            <p> Meu nome e {name} minha idade e {age}</p>
            <hr />
            <button className="border border-blue-300 m-3 p-3" onClick={handleClickPedro} type="button">Mudar para pedro</button>
            <button className="border border-blue-300 m-3 p-3" onClick={handleClickJoao}>Mudar para joao</button>
            
            <hr />

            <button className="border border-blue-300 m-3 p-3" onClick={() => {handlerClickAge(10)}} >Idade 10</button>
            <button className="border border-blue-300 m-3 p-3" onClick={() => {handlerClickAge(90)}} >Idade 90</button>
        </div>
    );
}