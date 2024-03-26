// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
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
