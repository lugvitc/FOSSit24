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

<div class="relative m-auto mt-20 flex w-full max-w-6xl justify-between px-8">
	<img
		src="{base}/assets/Asset 2.png"
		class="absolute left-[-700px] top-[-700px] z-[-100] h-[1000px] w-[1000px]"
		alt="Gradient background"
	/>
	<div class="flex items-center space-x-12">
		<a href="{base}/">
			<img src="{base}/logo.png" class="h-12" alt="Logo" />
		</a>
		<div class="hidden items-center space-x-12 xl:flex">
			<a href="{base}/">LUGVITC</a>
			<a href="{base}/">Leaderboard</a>
			<a href="{base}/">Projects</a>
			<a href="{base}/">Dashboard</a>
		</div>
	</div>
	<div class="hidden items-center space-x-4 xl:flex">
		{#if $user.id}
			<a href="{base}/">Welcome</a>
			<a href="{base}/">{$user}</a>
		{:else}
			<Button href="{base}/">Login</Button>
			<Button href="{base}/" primary>Signup</Button>
		{/if}
	</div>
	<p class="block xl:hidden">Menu</p>
</div>
