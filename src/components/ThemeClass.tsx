import { useTheme } from "@/contexts/ThemeContext";
// import { useTheme } from "@/hooks/useTheme";
import { DARK } from "@/reducers/themeReducer";

export const ThemeClass = () => {
    const {theme, dispatch} = useTheme();
  return (
    <div className="w-screen h-screen"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <div className="container mx-auto p-10">
        <header className="flex flex-wrap">
          <h1 className="text-5xl font-bold flex-1">Título da página</h1>

          <button
              className="justify-self-end-safe p-3 rounded border cursor-pointer"
              onClick={dispatch.bind(null, { type: theme.backgroundColor === DARK ? 'light' : 'dark' })}
              style={{
                backgroundColor: theme.color,
                color: theme.backgroundColor
              }}
          >
            mudar tema ({theme.backgroundColor === DARK ? 'claro' : 'escuro'})
          </button>
        </header>

        <main>
          <p>Corpo da página</p>

          <button
            className="p-3 rounded border cursor-pointer"
            style={{
              backgroundColor: theme.color,
              color: theme.backgroundColor
            }}
          >
            Clique aqui
          </button>
        </main>

        <footer>
          <p>Rodapé</p>
        </footer>
      </div>
    </div>
  );
}