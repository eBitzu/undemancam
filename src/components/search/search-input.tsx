'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC, KeyboardEvent, useEffect } from 'react';

export const SearchInput: FC = () => {
  const search = useSearchParams().get('search') ?? '';
  const router = useRouter();
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const params = new URLSearchParams();
      if (e.currentTarget.value) {
        params.set('search', e.currentTarget.value);
      } else {
        params.delete('search');
      }
      router.push(`/?${params}`);
    }
  };

  useEffect(() => {
    if (search && !document.cookie.includes(search)) {
      document.cookie = `search-term=${search}`;
      window.location.reload();
    }
  }, [search]);

  return (
    <input
      type="search"
      name="search"
      onKeyUp={handleKeyUp}
      defaultValue={search}
      className="h-10 w-full border-solid border-black border-2 rounded-xl p-2 pl-8"
      placeholder="Caută restaurant"
    />
  );
};
