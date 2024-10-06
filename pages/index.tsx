import * as React from 'react';
import IntroCard from '@/components/home/IntroCard';
import JobCard from '@/components/home/JobCard';
import StudyCard from '@/components/home/StudyCard';

interface HomePageProps { }

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <IntroCard />
      <JobCard />
      <StudyCard />
    </div>
  );
}

export default HomePage;