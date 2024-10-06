import { formatSimpleDate } from '@/helpers/date';
import { ExperienceDataType } from '@/server/experience.data';
import { MainContext } from '@/types/MainContext';
import { Accordion, AccordionItem, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import * as React from 'react';

interface ExperiencesPageProps { }

const ExperiencesPage: React.FunctionComponent<ExperiencesPageProps> = () => {
  const { finishRedirect, redirectData, appApi } = React.useContext(MainContext);
  const [myExperiences, setMyExperiences] = React.useState<ExperienceDataType[]>([])

  const getExperiences = React.useCallback(async () => {
    const { data } = await appApi.getExperiences();
    setMyExperiences(data);

    if (!redirectData) return;
    finishRedirect();
  }, [redirectData, finishRedirect])

  const formatExperienceDescription = (description: string, experienceIndex: number) => {
    let tmp = description.split("%e");
    tmp = tmp.filter(t => !!t && t !== "%e");

    if (tmp.length === 1) return tmp;

    return (
      <ul className='list-disc ml-7 my-2'>
        {tmp.map((t, tIndex) => (<li key={`${experienceIndex}-description:${tIndex}`}><small>{t}</small></li>))}
      </ul>
    )
  }

  React.useEffect(() => {
    getExperiences();
  }, [getExperiences])

  return (
    <div>
      {myExperiences.map((experience, index) => (
        <Card key={`${index}-experience:${experience.role}`} className='normal-text mb-4'>
          <CardHeader className='block text-center lg:text-start my-2 text-xl'>
            <b>{experience.role}</b>
          </CardHeader>
          <Divider />
          <CardBody className='p-5 flex flex-col gap-2 text-sm'>
            <p className='flex flex-col items-center text-center gap-2 mb-2 justify-center'>
              <a href={experience.link || "#"} target='_blank'>
                <img src={experience.companyLogo} alt={experience.companyName} width="75px" className='rounded-full' />
              </a>
              <span className="text-xl font-bold">{experience.companyName}</span>
            </p>
            <p>Período: {formatSimpleDate(experience.startDate)} {experience.endDate ? `~ ${formatSimpleDate(experience.endDate)}` : ''}</p>
            <p className="mb-2">Carga horária: {experience.workTime} <small>{experience.remote ? '(Remoto)' : ''}</small></p>
            <Accordion variant="splitted" isCompact fullWidth className='p-0'>
              <AccordionItem key="1" aria-label="Descrição" title="Minhas funções" className='px-4'>
                {formatExperienceDescription(experience.description, index)}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Skills" title="Habilidades" className='px-4'>
                <ul className='list-disc ml-7 my-2'>
                  {experience.skills.map((skill, skillIndex) => (
                    <li key={`${index}-${experience.role}-skill:${skill}-${skillIndex}`}><small>{skill}</small></li>
                  ))}
                </ul>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default ExperiencesPage;