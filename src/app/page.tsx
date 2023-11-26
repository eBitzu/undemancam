import { createElement } from 'react';
import { getAllRestaurants } from '../contentful/gql';
import { RestaurantList } from '../components/restaurant';

export default async function Home() {
  const restaurants = (await getAllRestaurants()) ?? [];
  return (
    <section className="flex flex-col gap-4 w-5/6 lg:w-1/2  mx-auto">
      <h1>
        <span>Caută printre cele </span>
        <strong>{restaurants.length}</strong>
        <span> de restaurante înregistrate până acum</span>
      </h1>
      {createElement(RestaurantList, { restaurants })}
    </section>
  );
}
