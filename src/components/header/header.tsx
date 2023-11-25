import { LogoComponent } from '../logo';

export const Header = () => {
  return <header className="mx-auto sticky pt-1 px-5 flex justify-between border-solid border-b-2 border-black dark:border-white">
    <LogoComponent />
  </header>;
};
