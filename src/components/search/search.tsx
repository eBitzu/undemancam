import { SearchSubmit } from '../../server-actions/search-submit';
import { SearchInput } from './search-input';

export const Search = () => (
  <form action={SearchSubmit} id="form-search">
    <SearchInput />
  </form>
);
