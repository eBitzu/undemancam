type Items<T> = {
  items: Array<T>;
};

type CollectionsTypes = 'restaurantCollection';

export type GQLItemsResultType<T> = {
  data: Record<CollectionsTypes, Items<T>>;
  errors?: Array<string>;
};

export type GQLRestaurant = {
  restaurantName: string;
  phoneNumber: string;
  location: string;
  website: string;
}
