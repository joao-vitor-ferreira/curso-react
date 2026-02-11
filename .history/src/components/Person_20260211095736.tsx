const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

export const Person  = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg',
        role: ['CEO da Tesla', 'CEO da SpaceX']
    }
    const today = new Date();
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '19px'}}>{ data.name } - { getWeekDay(today).toUpperCase() }</h1>
            <img
                src={ data.avatar } 
                alt={ data.name }
                className="h-40"
            />

            <ul>
                <li>{ data.role[0]  }</li>
                <li>{ data.role[1]  }</li>
                <li>Ceo da ...</li>
            </ul>
        </>
    );
}