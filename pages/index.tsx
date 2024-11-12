import * as React from 'react';
import IntroCard from '@/components/home/IntroCard';
import JobCard from '@/components/home/JobCard';
import StudyCard from '@/components/home/StudyCard';
import ContactCard from '@/components/home/ContactCard';
import { MainContext } from '@/types/MainContext';

const HomePage: React.FunctionComponent = () => {
  const { finishRedirect, redirectData } = React.useContext(MainContext);

  React.useEffect(() => {
    if (redirectData?.page === "/") {
      setTimeout(() => {
        finishRedirect();
      }, 1000);
    }
  }, [redirectData, finishRedirect])

  return (
    <div>
      <IntroCard />
      <JobCard />
      <StudyCard />
      <ContactCard />
    </div>
  );
}

export default HomePage;