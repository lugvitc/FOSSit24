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
	team: string;
	reg_no: string;
	sessionOrgId: string | null;
}

interface Team {
	team_id: string;
	name: string;
	points: number;
}

export { Team };
export { User };
