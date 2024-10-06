import * as React from 'react';
import { generateEmptyCharacterState } from '@/types/Character';
import { MainContext } from '@/types/MainContext';
import PageCharacter from '../characters/shared/PageCharacter';

interface RedirectTransitionProps {
  isOn: boolean;
  onFinishLoadingOff: () => void
}

const RedirectTransition: React.FunctionComponent<RedirectTransitionProps> = ({ isOn, onFinishLoadingOff }) => {
  const { startRedirect } = React.useContext(MainContext);

  const handleEndTransition = React.useCallback(() => {
    if (isOn) {
      startRedirect();
    } else {
      onFinishLoadingOff();
    }
  }, [isOn]);

  const characterStateForLoading = React.useMemo(() => {
    if (isOn) return { ...generateEmptyCharacterState(), running: true, direction: 'left', walking: true }
    return { ...generateEmptyCharacterState(), direction: 'right', pushing: true }
  }, [isOn])

  return (
    <div className={`h-screen w-screen loading-transition-duration bg-secondary fixed flex items-center justify-center loading-transition ${isOn ? 'on' : 'off'}`}>
      <div className={`fixed loading-transition-duration character-loading-transition ${isOn ? 'on' : 'off'}`} onTransitionEnd={handleEndTransition}>
        <PageCharacter state={characterStateForLoading} />
      </div>
      Carregando...
    </div>
  );
}

export default RedirectTransition;