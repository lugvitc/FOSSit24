import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {};

interface User {
	id: string;
	name: string;
	team_id: string;
	team_name: string;
	github: string;
	points: number;
	sessionOrgId: string | null;
}

export { User };
