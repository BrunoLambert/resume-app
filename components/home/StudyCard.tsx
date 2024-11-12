import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import * as React from 'react';

const StudyCard: React.FunctionComponent = () => {
  return (<Card className='mt-5 normal-text'>
    <CardHeader className='block text-center lg:text-start my-2'>
      <b>Meus Estudos</b>
    </CardHeader>
    <Divider />
    <CardBody className='p-5'>
      <p>
        Ensino Superior Incompleto
      </p>
      <dl className='list-disc mt-3'>
        <dt>UNIFEI - Universidade Federal de Itajubá</dt>
        <dd>Curso: Sistemas de Informação</dd>
        <dd>Período: 2016 ~ 2021</dd>
      </dl>
    </CardBody>
    <Divider />
    <CardBody className='p-5'>
      <p>
        Ensino Médio-Técnico
      </p>
      <dl className='list-disc mt-3'>
        <dt>ETE - Escola Técnica de Eletrônica &quot;Francisco Moreira da Costa&quot;</dt>
        <dd>Curso: Ensino médio / técnico</dd>
        <dd>Período: 2010 ~ 2012</dd>
      </dl>
    </CardBody>
  </Card>);
}

export default StudyCard;