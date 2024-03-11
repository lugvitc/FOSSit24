import { createClient } from "@supabase/supabase-js";
import { PROJECT_URL } from "$env/static/private";
import { ANON_KEY } from "$env/static/private";

export const supabase = createClient(PROJECT_URL, ANON_KEY);
