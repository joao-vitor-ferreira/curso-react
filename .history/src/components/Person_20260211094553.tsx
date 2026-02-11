export const Person  = () => {
    const avatar: string = "https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg";
    const name: string = "Elon Musk";
    return (
        <>
            <h1>{ name }</h1>
            <img
                src={ avatar } 
                alt="Elon Musk"
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