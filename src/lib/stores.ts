import { writable } from 'svelte/store';
import type { User } from '../app.d.ts';
import type { Team } from '../app.d.ts';
import type { AuthUser } from '@supabase/supabase-js';

export const user = writable({} as User);
export const team = writable({} as Team);
export const auth_user = writable({} as AuthUser);
