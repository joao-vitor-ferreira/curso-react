import { Gallery } from "@/components/Gallery";
import { Person } from "@/types/Person";
import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";


export const GaleriaExercicio = () => {
  const photos = [];
  for (let index = 1; index < 10; index++) {
    photos[index] = {
      id: crypto.randomUUID(),
      path: '/assets/img/'+index+'.jpg'
    };
  }
  return (
    <div className="w-full-screen h-full-screen bg-neutral-950 text-white">
      <Gallery photos={photos} />
    </div>
  );
}

export const TodoAula = () => {
  const [itemInput, setItemInput] = useState('');
  const[list, setList] = useState<TodoItem[]>([
    { id: 'gyu123g', label: 'Fazer dever de casa', checked: false },
    { id: '234huid', label: 'Fazer bolo', checked: false },
  ]);

  const handleAddBtn = () => {
    if(itemInput.trim() === '') return;
    setList([...list, { id: crypto.randomUUID(), label: itemInput, checked: false }]);
    setItemInput('');
    document.getElementById('input-text')?.focus();
  }

  const handleDeleteItem = (index: string) => {
    const newList = list.filter(item => index !== item.id);
    setList(newList);
  }

  const toggleItem = (index: string) => {
    let newList = [...list];
    for(let i in newList){
      if(index === newList[i].id){
        newList[i].checked = !newList[i].checked;
      }
    }
    setList(newList);
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

        <button onClick={handleAddBtn}>Adicionar</button>
        <p className="my-4">
          {list.length <= 0 && 'nenhum item'}
          {list.length === 1 && '1 item'}
          {list.length > 1 && list.length + 'itens'}
          na lista</p>
        <ul className="w-full max-w-lg list-disc pl-5">
          {list.map((item) => (
            <li key={item.id}>
              <input type="checkbox" className="w-6 h-6 mr3" checked={item.checked} onChange={() => {toggleItem(item.id)}}/>
              {item.label} - <button onClick={() => handleDeleteItem(item.id)} className="hover:underline">[ deletar ]</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const atualizandoObjetosEmStates = () => {

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

export const stateUpdate = () => {
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

export const statesMudandoNoTempo = () => {
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

export const usandoStatesParaAuxiliarUI = () => {
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