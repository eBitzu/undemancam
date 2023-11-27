import { useRestaurantChecked } from '../../state';

export const useIsVisited = (term: string) => {
  const { restaurantChecked, toggleCheckRestaurant } = useRestaurantChecked();

  return {
    checked: !!restaurantChecked.find((val) => val === term),
    toggleCheckRestaurant
  };
};
