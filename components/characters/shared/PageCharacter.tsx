import { MainContext } from '@/types/MainContext';
import * as React from 'react';
import KnightCharacter from '../Knight';
import { CharacterComponentProps } from '@/types/Character';
import MageCharacter from '../Mage';


const PageCharacter: React.FunctionComponent<CharacterComponentProps> = ({ state }) => {
  const { pageCharacter } = React.useContext(MainContext);

  const pageCharacterComponent = React.useMemo(() => {
    switch (pageCharacter) {
      case 'knight':
        return <KnightCharacter state={state} />
      default:
        return <MageCharacter state={state} />
    }
  }, [pageCharacter, state])

  return pageCharacterComponent;
}

export default PageCharacter;