import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';

const Page = () => {
    return (
        <div>
          <h1 className="font-bold text-2xl">Olá, mundo</h1>
          <h3>Algum texto</h3>
          <Person 
            name="Elon Musk"
            avatar="https://upload.wikimedia.org/wikipedia/commons/9/95/The_White_House_-_54409525537_%28cropped%29.jpg"
            role={["CEO da Tesla", "CEO da SpaceX"]}
          />
          <GeoForm />
        </div>
    );
};

export default Page;