import { createElement } from 'react';
import { getAllRestaurants } from '../api/gql';
import { Restaurant } from '../components/restaurant';

export default async function Home() {
  const restaurants = (await getAllRestaurants()) ?? [];
  return (
    <section className="flex flex-col gap-4 w-5/6 lg:w-1/2  mx-auto">
      {restaurants.map((el) =>
        createElement(Restaurant, { ...el, key: el.phoneNumber })
      )}
    </section>
  );
}
