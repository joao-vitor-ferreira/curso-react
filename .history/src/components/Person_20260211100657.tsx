const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
    address?: string
}

export const Person = ({ name, avatar, roles }: Props) => {
    const today = new Date();
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '19px'}}>{ props.name } - { getWeekDay(today).toUpperCase() }</h1>
            <img
                src={ props.avatar } 
                alt={ props.name }
                className="h-40"
            />

            <ul>
                <li>{ props.roles[0]  }</li>
                <li>{ props.roles[1]  }</li>
                <li>Ceo da ...</li>
            </ul>
        </>
    );
}