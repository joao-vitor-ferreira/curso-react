import { Item } from "@/types/Item";

type AddAction = {
    type: 'add';
    payload: {
        text: string
    }
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: string;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: string,
        done: boolean
    };
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: string
    };
}

export type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

// PREGUICOSOS
// type ListActions = {
//     type: string // OU 'add' | 'editText' | 'toggleDone' | 'remove';
//     payload: any;
// }

export const listRedeucer = (list: Item[], action: ListActions) => {
    // Executar Alguma acao
    // retorna lista atualizada

    console.log('chamou listRedeucer');

    switch(action.type){
        case 'add':
            let uid = crypto.randomUUID();
            console.log(uid);
            return [...list, {
                id: uid,
                text: action.payload.text,
                done: false
            }];
        case 'editText':
            return list.map(t => {
                if(t.id === action.payload.id) t.text = action.payload.newText;
                return t;
            });
        case 'toggleDone':
            return list.map(t => {
                console.log(t.id, action.payload.id, t.done);
                if(t.id === action.payload.id) t.done = action.payload.done;
                return t;
            });
        case 'remove':
            return list.filter(t => t.id !== action.payload.id)
        default:
            return list;
    }
}