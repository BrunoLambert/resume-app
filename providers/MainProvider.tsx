import * as React from 'react';
import { MainContext, MainContextType, RedirectDataType } from '@/types/MainContext';
import { CharacterType } from '@/types/Character';
import { useRouter } from 'next/router';
import ApiClient from '@/client/ApiClient';

interface MainProviderProps {
  children: React.ReactNode
}

const MainProvider: React.FunctionComponent<MainProviderProps> = ({ children }) => {
  const router = useRouter();

  const [introEnded, setIntroEnded] = React.useState(false);
  const [redirectData, setRedirectData] = React.useState<RedirectDataType | undefined>(undefined);

  const handleAnimatedRedirect = (page: string, character: CharacterType) => {
    setRedirectData({
      page,
      character
    })
  }

  const pageCharacter = React.useMemo(() => {
    switch (router.pathname) {
      case '/experiencias':
        return 'knight'
      default:
        return 'mage'
    }
  }, [router.pathname])

  const startRedirect = React.useCallback(() => {
    if (!redirectData?.page) return;

    router.push(redirectData.page)
  }, [router, redirectData])

  const finishRedirect = React.useCallback(() => {
    if (!redirectData?.page) return;

    setRedirectData(undefined);
  }, [redirectData])

  const contextValue = React.useMemo<MainContextType>(() => {
    return {
      introEnded,
      setIntroEnded,
      redirectData,
      animatedRedirect: handleAnimatedRedirect,
      startRedirect,
      finishRedirect,
      pageCharacter,
      appApi: new ApiClient("/api")
    }
  }, [introEnded, redirectData])

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;