import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LogoComponent } from '../logo';
import { Search } from '../search/search';

export const Header = () => (
  <header className="h-32 lg:h-20 mx-auto sticky pt-1 px-5 flex justify-between items-center border-solid border-b-2 border-black dark:border-white">
    <LogoComponent />
    <div className="w-5/6 lg:w-1/4 absolute bottom-4 left-0 right-0 mx-auto">
      <Search />
      <FontAwesomeIcon
        className="absolute left-3 top-3"
        icon={faMagnifyingGlass}
      />
    </div>
  </header>
);
