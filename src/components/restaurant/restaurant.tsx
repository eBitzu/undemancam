import { FC } from 'react';
import dynamic from 'next/dynamic';
import { GQLRestaurant } from '../../contentful/gql.types';

const IsVisited = dynamic(
  () => import('../is-visited/is-visited').then((module) => module.default),
  { ssr: false }
);

export const Restaurant: FC<GQLRestaurant> = ({
  phoneNumber,
  isClosed,
  restaurantName,
  website
}) => (
  <div className="border-orange-400 border-solid rounded-md border-2 py-2 px-5 flex justify-between items-center">
    <div>
      <div className="flex items-center gap-3">
        <h4 className="text-xl inline-block">
          {isClosed && <span className="text-red-600">Închis - </span>}
          <span>{restaurantName}</span>
        </h4>
        {!!website && (
          <a
            href={website}
            aria-label="website"
            className="text-blue-700"
            title="website"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        )}
      </div>
      {!!phoneNumber && (
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-mobile-screen-button dark:fill-white" />
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </div>
      )}
    </div>
    <div>
      <IsVisited term={restaurantName} />
    </div>
    {/* <LocationShow /> */}
  </div>
);
