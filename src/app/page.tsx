import { getAllRestaurants } from '../api/gql';

export default async function Home() {
  const restaurants = await getAllRestaurants();
  return <main><pre>{JSON.stringify(restaurants, null, 2)}</pre></main>;
}
