import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type RestaurantListStore = {
  restaurantChecked: Array<string>;
  toggleCheckRestaurant: (term: string) => void;
};

export const useRestaurantChecked = create<RestaurantListStore>()(
  persist(
    (set) => ({
      restaurantChecked: [] as Array<string>,
      toggleCheckRestaurant: (term: string) =>
        set(({ restaurantChecked }) => {
          if (restaurantChecked.includes(term)) {
            return {
              restaurantChecked: restaurantChecked.filter((el) => el !== term)
            };
          }
          return {
            restaurantChecked: [...restaurantChecked, term]
          };
        })
    }),
    {
      name: 'restaurant-list'
    }
  )
);
