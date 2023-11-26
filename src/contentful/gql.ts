import { draftMode } from 'next/headers';
import { GQLItemsResultType, GQLRestaurant } from './gql.types';

const gqlRoot = 'https://graphql.contentful.com/content/v1/spaces';

/**
 * fetchGraphQL
 * @param query GQL query string
 * @param preview is Preview
 * @returns Promise<Object>
 */
export const fetchGraphQL = async <ReturnType = GQLItemsResultType<unknown>>(
  query: string
): Promise<ReturnType> => {
  let preview = false;
  try {
    preview = draftMode().isEnabled;
  } catch (er) {
    // eslint-disable-next-line no-console
    console.error('no draft');
  }
  return (<ReturnType>fetch(
    `${gqlRoot}/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: 'POST',
      cache: preview ? 'no-cache' : undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query, variables: { preview } }),
      next: { tags: ['posts'] }
    }
  ).then((response) => response.json())) as Promise<ReturnType>;
};

/**
 * getAllSlugs - fetch all pages slugs using gql
 * @param preview isPreview
 * @returns All pages slugs
 */
export const getAllRestaurants = async (): Promise<Array<GQLRestaurant>> => {
  try {
    return await (
      fetchGraphQL(`query($preview: Boolean){
      restaurantCollection(preview: $preview){
        items{
          restaurantName
          phoneNumber
          isClosed
          website
          location {
            lat
            lon
          }
        }
      }
    }`) as Promise<GQLItemsResultType<GQLRestaurant>>
    ).then((val) =>
      val.data.restaurantCollection.items.sort((a) => (a.isClosed ? 1 : -1))
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('something went bad on fetching restaurants');
    return [];
  }
};
