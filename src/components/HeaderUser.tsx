import { UserLoggedContext } from "@/contexts/UserLogged";
import { useContext } from "react";

export const HeaderUser = () => {
    const userLoggedCtx = useContext(UserLoggedContext)

    const handlerClick = () => {
        userLoggedCtx?.setUserLogged('Irineu');
    }

    return(
        <header>
            <h1>Titulo da pagina</h1>
            <p>Usuario: { userLoggedCtx?.userLogged }</p>
            <button className="btn rounded p-3 bg-blue-400" type="button" onClick={handlerClick}>Logar</button>
        </header>
    );
}