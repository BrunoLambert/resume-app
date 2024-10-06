import * as React from 'react';
import { CharacterType } from './Character';
import ApiClient from '@/client/ApiClient';

export interface RedirectDataType {
  page: string,
  character: CharacterType
}

export interface MainContextType {
  introEnded: boolean
  setIntroEnded: React.Dispatch<React.SetStateAction<boolean>>
  redirectData?: RedirectDataType,
  animatedRedirect: (page: string, character: CharacterType) => void,
  startRedirect: () => void,
  finishRedirect: () => void,
  pageCharacter: CharacterType,
  appApi: ApiClient
}

// Functions

export const generateMainContext = (init?: MainContextType): MainContextType => ({
  introEnded: false,
  setIntroEnded: () => { },
  animatedRedirect: (page: string, character: CharacterType) => { },
  startRedirect: () => { },
  finishRedirect: () => { },
  pageCharacter: 'mage',
  appApi: new ApiClient(),
  ...init
})

export const MainContext = React.createContext(generateMainContext())