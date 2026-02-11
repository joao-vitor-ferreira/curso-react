const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}

export const Person = ({ name, avatar = 'https://www.shutterstock.com/shutterstock/photos/2703919459/display_1500/stock-vector-default-avatar-profile-image-symbol-2703919459.jpg', roles }: Props) => {
    const today = new Date();
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '19px'}}>{ name } - { getWeekDay(today).toUpperCase() }</h1>
            <img
                src={ avatar } 
                alt={ name }
                className="h-40"
            />

            <ul>
                <li>{ roles[0]  }</li>
                <li>{ roles[1]  }</li>
                <li>Ceo da ...</li>
            </ul>
        </>
    );
}