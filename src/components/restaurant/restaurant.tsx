import { FC } from 'react';
import { GQLRestaurant } from '../../api/gql.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';

export const Restaurant: FC<GQLRestaurant> = ({
  location,
  phoneNumber,
  isClosed,
  restaurantName,
  website
}) => {
  return (
    <div className="border-orange-400 border-solid rounded-md border-2 py-2 px-5 flex justify-between">
      <div>
        <div className='flex items-center gap-3'>
          <h4 className="text-xl inline-block">
            {isClosed && <span className="text-red-600">Închis - </span>}
            <span>{restaurantName}</span>
          </h4>
          {!!website && (
            <a href={website} className="text-blue-700" title="website">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
        {!!phoneNumber && (
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="dark:fill-white inline-block"
              icon={faMobileScreenButton}
            />
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        )}
      </div>
    </div>
  );
};
