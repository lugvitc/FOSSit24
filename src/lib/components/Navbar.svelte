<script lang="ts">
	import { user } from '$lib/stores';
	import supabase from '$lib/supabaseClient';
	import { onMount } from 'svelte';

	async function logout() {
		// logout function
	}

	async function signup() {
		// sign up function
	}

	async function login() {
		// login function
	}

	onMount(async () => {
		const { data } = await supabase.auth.getUser();

		if (data.user) {
			let { data: user_data } = await supabase
				.from('user')
				.select('*')
				.eq('id', data.user.id)
				.single();
			$user = user_data;
		}
	});
</script>

<nav class="flex h-16 flex-row">
	<a href="/" class=""><img src="fossit.jpeg" alt="FOSSit logo" class="h-16" /></a>
	<a href="/" class="">FOSSit</a>
	<a href="/" class="">Leaderboard</a>
	<a href="/" class="">Projects</a>
	{#if $user.id}
		<button>Login</button>
		<button>Dashboard</button>
	{:else}
		<button>Login</button>
		<button>Sign Up</button>
	{/if}
</nav>
