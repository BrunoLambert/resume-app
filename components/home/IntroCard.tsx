import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import Image from 'next/image';
import * as React from 'react';

interface IntroCardProps { }

const IntroCard: React.FunctionComponent<IntroCardProps> = () => {
  return (<Card>
    <CardHeader className='flex justify-center flex-col gap-3'>
      <div className='pt-3'>
        <Image src="/profile.jpg" alt="Bruno" width={150} height={100} className='rounded-3xl' />
      </div>
      <div className='normal-text'>
        <b>Bruno Lambert</b>
      </div>
    </CardHeader>
    <Divider />
    <CardBody className='normal-text py-7 px-4 lg:px-7'>
      <p className='mb-5 text-center lg:text-start'>
        Olá! Bem-vindo ao meu site!
      </p>
      <p className='text-center lg:text-justify'>
        Meu objetivo é me tornar um desenvolvedor especialista frontend completo com experiência tanto em diferentes frameworks
        tanto quanto nas melhores práticas relacionadas a experiência dos usuários.
      </p>
    </CardBody>
  </Card>);
}

export default IntroCard;