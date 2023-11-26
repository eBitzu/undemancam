'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function SearchSubmit(e: FormData) {
  const search = e.get('search')?.toString() ?? '';
  cookies().set('search-term', search);
  revalidatePath('/');
}
