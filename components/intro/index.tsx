import * as React from 'react';
import { Button } from '@nextui-org/react';
import { generateEmptyCharacterState } from '@/types/Character';
import '@/styling/intro.scss';
import { MainContext } from '@/types/MainContext';
import PageCharacter from '../characters/shared/PageCharacter';

interface AppIntroProps {
  introIsFinish: () => void
}

const AppIntro: React.FunctionComponent<AppIntroProps> = ({ introIsFinish }) => {
  const { setIntroEnded } = React.useContext(MainContext);

  const [isOpened, setIsOpened] = React.useState(true);

  const handleTransitionStart = React.useCallback(() => {
    setIsOpened(false)
    setIntroEnded(true)
  }, [introIsFinish])

  return (
    <div className={`transition-all intro-duration h-screen flex items-center justify-center bg-zinc-800 fixed z-50 intro-transition ${isOpened ? 'on' : 'off'}`}>
      <div className={`fixed intro-duration character-transition ${!isOpened ? 'off' : ''}`} onTransitionEnd={introIsFinish}>
        <PageCharacter state={{ ...generateEmptyCharacterState(), pushing: true }} />
      </div>
      <div className='w-screen'>
        <div className='mb-5 text-center luckiest-guy-regular text-lg'>
          Aqui, nós falamos sobre o Bruno!
        </div>
        <div className='w-full max-w-md px-5 m-auto'>
          <Button fullWidth color='secondary' onClick={handleTransitionStart}>
            Mas quem é Bruno?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppIntro;