const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

type Props = {
    name: String;
    avatar: String;
    role: String[];
    address?: String
}

export const Person = (props: Props) => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg',
        role: ['CEO da Tesla', 'CEO da SpaceX']
    }
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
                <li>{ props.role[0]  }</li>
                <li>{ props.role[1]  }</li>
                <li>Ceo da ...</li>
            </ul>
        </>
    );
}