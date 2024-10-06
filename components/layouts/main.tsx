import * as React from 'react';
// import localFont from "next/font/local";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem
} from '@nextui-org/react';
import { CharacterStateType, generateEmptyCharacterState } from '@/types/Character';
import { MainContext } from '@/types/MainContext';
import '@/styling/layout.scss';
import RedirectTransition from './RedirectTransition';
import PageCharacter from '../characters/shared/PageCharacter';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  const { introEnded, redirectData } = React.useContext(MainContext);

  const [redirectIsOn, setRedirectIsOn] = React.useState(false);
  const [headerCharacterState, setHeaderCharacterState] = React.useState<CharacterStateType>({
    ...generateEmptyCharacterState(),
    walking: true,
    direction: 'right'
  })

  const activeCharacterAnimationClass = React.useMemo(() => {
    if (redirectData) return 'on-reverse'
    else if (introEnded && !redirectData) return 'on';
  }, [introEnded, redirectData])

  const handleCharacterTransitionEnd = React.useCallback(() => {
    setHeaderCharacterState(generateEmptyCharacterState());

    if (redirectData) {
      setRedirectIsOn(true)
    }
  }, [redirectData])

  React.useEffect(() => {
    if (redirectData) {
      setHeaderCharacterState({
        ...generateEmptyCharacterState(),
        direction: 'left',
        walking: true
      })
    } else {
      setHeaderCharacterState({
        ...generateEmptyCharacterState(),
        direction: 'right',
        walking: true
      })
      setRedirectIsOn(false)
    }
  }, [redirectData])

  return (
    <div>
      <Navbar position="sticky" isBordered height="fit-content" className='layout-header fixed'>
        <NavbarContent justify="center">
          <NavbarBrand className='header-brand'>
            <div className={`header-brand-content ${activeCharacterAnimationClass}`} onTransitionEnd={handleCharacterTransitionEnd}>
              <PageCharacter state={headerCharacterState} />
            </div>
          </NavbarBrand>
          <NavbarItem>
            <h1>Quem é Bruno Lambert?</h1>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <RedirectTransition isOn={redirectIsOn} onFinishLoadingOff={handleCharacterTransitionEnd} />
      <div className='p-5' style={{ marginTop: 100, zIndex: 2 }}>
        <div className='max-w-lg m-auto'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;