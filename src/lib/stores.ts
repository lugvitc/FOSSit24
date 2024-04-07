import { writable } from "svelte/store";
import type { User } from "../app.d.ts";
import type { AuthUser } from "@supabase/supabase-js";

export const user = writable({} as User);
export const auth_user = writable({} as AuthUser);
