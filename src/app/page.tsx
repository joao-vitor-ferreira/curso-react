"use client"
import { Person } from "@/types/Person";
import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const[list, setList] = useState<TodoItem[]>([
    { label: 'Fazer dever de casa', checked: false },
    { label: 'Fazer bolo', checked: false }
  ]);

  const handleAddBtn = () => {
    setList([...list,{ label: itemInput, checked: false }]);
    setItemInput('');
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
        />

        <button onClick={handleAddBtn}>Adicionar</button>
        <p className="my-4">{list.length} itens na lista</p>
        <ul className="w-full max-w-lg list-disc pl-5">
          {list.map(item => (
            <li key={item.label}>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const atualizandoObjetosEmStates = () => {

  const [fullName, setfullName] = useState<Person>({ name: '', lastName: '' });
  const handlerBtnClick = () => {
    setfullName({ name: '', lastName: '' });
  }

  return (
    <div className="w-scren h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl rounded-md mb-3"
        value={fullName.name}
        onChange={e => setfullName({ ...fullName, name: e.currentTarget.value })}
      />

      <input 
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setfullName({ ...fullName, lastName: e.currentTarget.value })}
      />

      <p>Meu nome completo e: </p>
      <p>{fullName.name + ' ' + fullName.lastName}</p>


      <button className="bg-blue-500 rounded p-3" onClick={handlerBtnClick}>Limpar Tudo</button>
    </div>
  );
}

const stateUpdate = () => {
  const [count, setCount] = useState(0);

  const handlerBtnClick = () => {
    setCount(count + 2);
    setCount(c => c + 2);
    setCount(c => c + 2);
    alert(count);
  }

  return (
    <div className="w-scren h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>

      <button onClick={handlerBtnClick} className="bg-blue-500 rounded text-white text-2xl p-3">+6</button>
    </div>
  );
}

const statesMudandoNoTempo = () => {
  const [count, setCount] = useState(0);

  const handlerBtnClick = () => {
    setCount(count+2);
    setCount(count+2);
    setCount(count+2);
    setCount(count+2);
    alert(count);
    console.log(count);
  }

  return (
    <div className="w-scren h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>

      <button onClick={handlerBtnClick} className="bg-blue-500 rounded text-white text-2xl p-3">+2</button>
    </div>
  );
}


const usandoStatesParaAuxiliarUI = () => {
  const [nameInput, setNameInput] = useState('');

  const handlerBtnClick = () => {
    alert(nameInput);
  }

  return (
    <div className="w-scren h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text" 
        className="border border-black p-3 text-xl rounded" 
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />

      <p>seu nome e: {nameInput}</p>

      <button onClick={handlerBtnClick} >Mostrar valor do campo</button>
    </div>
  );
}

export default Page;