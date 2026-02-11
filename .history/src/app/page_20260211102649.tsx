import { Card } from '@/components/Card';
import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';

const Page = () => {
    return (
        <div>
          <h1 className="font-bold text-2xl">Olá, mundo</h1>
          <h3>Algum texto</h3>

          <Card>
            <>
              <h3 className='text-3xl font-bold italic'>Frase de efeito</h3>
              <p className='text-right text-sm'>Autor desconhecido</p>
            </>
          </Card>

          <Person 
            name="Elon Musk"
            avatar="https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg"
            roles={["CEO da Tesla", "CEO da SpaceX"]}
          />

          <Person 
            name="Jeff Bezos"
            avatar="https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg"
            roles={["CEO da Amazon", "CEO da Blue Origin"]}
          />

          <Person
            name="Felix"
            roles={["CEO da DIO", "Professor"]}
          />

          <GeoForm />
        </div>
    );
};

export default Page;