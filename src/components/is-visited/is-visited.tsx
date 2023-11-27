'use client';

import { FC } from 'react';
import c from 'classnames';
import { useIsVisited } from './is-visited.hook';

type IsVisitedProps = {
  term: string;
};

const IsVisited: FC<IsVisitedProps> = ({ term }) => {
  const { checked = false, toggleCheckRestaurant } = useIsVisited(term);
  const title = checked ? 'Marchează ca nevizitat' : 'Marchează ca vizitat';

  return (
    <button
      aria-label={title}
      type="button"
      onClick={() => toggleCheckRestaurant(term)}
      className={c(
        'fa-regular fa-xl',
        checked
          ? 'fa-circle-check text-green-700 hover:text-red-500'
          : 'fa-pizza-slice text-gray-500 hover:text-blue-700'
      )}
      title={title}
    />
  );
};

export default IsVisited;
