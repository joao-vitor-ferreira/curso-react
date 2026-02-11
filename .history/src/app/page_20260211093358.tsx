import { GeoForm } from '@/components/GeoForm';
import { Person } from '@/components/Person';

const Page = () => {
    return (
        <div>
          <h1 className="font-bold text-2xl">Olá, mundo</h1>
          <h3>Algum texto</h3>
          <Person />
          <GeoForm />
        </div>
    );
};

export default Page;