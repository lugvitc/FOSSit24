<script lang="ts">
	import { user } from '$lib/stores';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { base } from '$app/paths';

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

<div class="relative m-12 mt-20 flex justify-between">
	<img
		src="{base}/assets/Asset 2.png"
		class="absolute left-[-700px] top-[-700px] z-[-100] h-[1000px] w-[1000px]"
	/>
	<div class="flex items-center space-x-12">
		<a>
			<img src="{base}/logo.png" class="h-12" />
		</a>
		<a>LUGVITC</a>
		<a>Leaderboard</a>
		<a>Projects</a>
		<a>Dashboard</a>
	</div>
	<div class="items-center space-x-4">
		{#if $user.id}
			<a>Welcome</a>
			<a>{$user.user}</a>
		{:else}
			<Button>Login</Button>
			<Button primary>Signup</Button>
		{/if}
	</div>
</div>
