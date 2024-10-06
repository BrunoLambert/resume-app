import { CharacterClass } from '@/types/Character';
import { MainContext } from '@/types/MainContext';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import * as React from 'react';

interface JobCardProps { }

const JobCard: React.FunctionComponent<JobCardProps> = () => {
  const { animatedRedirect } = React.useContext(MainContext);

  return (<Card className='mt-5 normal-text'>
    <CardHeader className='block text-center lg:text-start my-2'>
      <b>Minhas Experiências</b>
    </CardHeader>
    <Divider />
    <CardBody className='p-5'>
      <p>
        Frameworks de JS:
      </p>
      <ul className='list-disc ml-7 mt-3'>
        <li>React (4 anos)</li>
        <li>Vue (2 anos)</li>
        <li>React Native (1 ano)</li>
      </ul>

      <p className='mt-5'>
        Frameworks de Styling:
      </p>
      <ul className='list-disc ml-7 mt-3'>
        <li>Vuetify</li>
        <li>Material Design</li>
        <li>Chackra UI</li>
        <li>Kitten UI</li>
        <li>Tailwind.css</li>
        <li>Bootstrap-Vue</li>
        <li>Vue Material</li>
      </ul>

      <Button
        color='secondary'
        className='mt-5'
        fullWidth
        onClick={() => animatedRedirect('experiencias', CharacterClass.KNIGHT)}>
        Quero saber mais
      </Button>
    </CardBody>
  </Card>);
}

export default JobCard;