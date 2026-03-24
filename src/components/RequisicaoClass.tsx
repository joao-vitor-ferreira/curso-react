import { User } from "@/types/User";
import { useEffect, useState } from "react";

export const RequisicaoClass = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(r => r.json()).then(d => setUsers(d));
    });
    return (
        <div>
            <h1 className="text-3xl">Lista de Usuarios</h1>
            {users.length <= 0 && "Carregando ..."}
            {users.length > 0 && 
                <ul>
                    {users.map(item => (
                        <li key={item.id}>{item.id}) {item.name} at {item.address.city}</li>
                    ))}
                </ul>
            }
        </div>
    );
}