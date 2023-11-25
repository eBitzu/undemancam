'use client';

import { useRouter } from 'next/navigation';
import { KeyboardEvent } from 'react';

export const Search = () => {
  const router = useRouter();
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const params = new URLSearchParams();
      params.set('search', e.currentTarget.value);
      router.push(`/?${params}`);
    }
  };
  return (
    <input
      type="search"
      onKeyUp={handleEnter}
      className="h-10 w-full border-solid border-black border-2 rounded-xl p-2 pl-8"
      placeholder="Caută restaurant"
    />
  );
};
