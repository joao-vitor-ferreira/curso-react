const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

export const Person  = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg'
    }
    const avatar: string = "";
    const name: string = "";
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
                <li>Ceo da Tesla</li>
                <li>Ceo da Space X</li>
                <li>Ceo da ...</li>
            </ul>
        </>
    );
}