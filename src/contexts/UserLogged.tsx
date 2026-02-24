import { createContext, ReactNode, useState } from "react";

type UserLoggedType = {
    userLogged: string;
    setUserLogged: (u: string) => void
}
export const UserLoggedInitial = 'Nenhum usuario logado';
export const UserLoggedContext = createContext<UserLoggedType|null>(null);

type Props = { children: ReactNode; }
export const UserLoggedProvider = ({ children }: Props) => {
    const [userLogged, setUserLogged] = useState(UserLoggedInitial);
    return (
        <UserLoggedContext.Provider value={{ userLogged, setUserLogged }}>
            {children}
        </UserLoggedContext.Provider>
    );
}