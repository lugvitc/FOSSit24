// src/hooks.server.ts
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: 'https://snytdulgbjatdmtotpmk.supabase.co',
		supabaseKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueXRkdWxnYmphdGRtdG90cG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NzcwOTksImV4cCI6MjAyNTU1MzA5OX0.gBKmnpJAqnxkPHx9ARvbJLXmorcBwmdIRbkuNduebAM',
		event
	});

	/**
	 * a little helper that is written for convenience so that instead
	 * of calling `const { data: { session } } = await supabase.auth.getSession()`
	 * you just call this `await getSession()`
	 */
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
