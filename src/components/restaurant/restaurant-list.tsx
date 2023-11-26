import { FC, createElement } from 'react';
import {
  faMobileScreenButton,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { cookies } from 'next/headers';
import { GQLRestaurant } from '../../contentful/gql.types';
import { Restaurant } from './restaurant';

library.add(faMobileScreenButton, faArrowUpRightFromSquare);
type RestaurantListProps = {
  restaurants: Array<GQLRestaurant>;
};
export const RestaurantList: FC<RestaurantListProps> = ({ restaurants }) => {
  const searchTerm = cookies().get('search-term') ?? { value: '' };
  const filtered = restaurants.filter((el) =>
    el.restaurantName.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
  return filtered.length ? (
    filtered.map((el, idx) =>
      createElement(Restaurant, { ...el, key: el.phoneNumber ?? `tel_${idx}` })
    )
  ) : (
    <h3 className="text-2xl text-center mt-4">No restaurants found</h3>
  );
};
