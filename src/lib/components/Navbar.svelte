<script lang="ts">
	import { user } from '$lib/stores';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { base } from '$app/paths';

	let isOpen = false;

	async function logout() {
		// logout function
	}

	async function signup() {
		// sign up function collapse navbar-collapse
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
			$user = user_data || {};
		}
	});

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div class="m-auto mt-12 flex w-full max-w-6xl justify-between px-8 xl:px-0">
	<div class="absolute left-0 top-0 w-full overflow-x-clip">
		<img
			src="{base}/assets/Asset 2.png"
			class="gradient absolute left-[-500px] top-[-700px] -z-10 h-[1000px] w-[1000px] rotate-[180deg]"
			alt="Gradient background"
		/>
	</div>
	<div class="flex items-center space-x-12">
		<a href="{base}/">
			<img src="{base}/lug_logo.png" class="h-12" alt="Logo" />
		</a>
		<div class="hidden items-center space-x-12 xl:flex">
			<a href="https://lugvitc.net">LUGVITC</a>
			<!-- <a href="{base}/">Leaderboard</a> -->
			<!-- <a href="{base}/">Projects</a> -->
			<!-- <a href="{base}/">Dashboard</a> -->
		</div>
	</div>
	<!-- <div class="hidden items-center space-x-4 xl:flex"> -->
	<!-- 	{#if $user.id} -->
	<!-- 		<Button href="{base}/">Logout</Button> -->
	<!-- 		<Button href="{base}/" primary>{$user.name}</Button> -->
	<!-- 	{:else} -->
	<!-- 		<Button href="{base}/">Login</Button> -->
	<!-- 		<Button href="{base}/" primary>Signup</Button> -->
	<!-- 	{/if} -->
	<!-- </div> -->
	<!-- <div class="relative flex items-center justify-center xl:hidden"> -->
	<!-- 	<button class="block h-fit" on:click={toggleMenu}> -->
	<!-- 		<div class="space-y-2"> -->
	<!-- 			<span class="block h-0.5 w-6 bg-zinc-400"></span> -->
	<!-- 			<span class="block h-0.5 w-6 bg-zinc-400"></span> -->
	<!-- 			<span class="block h-0.5 w-6 bg-zinc-400"></span> -->
	<!-- 		</div> -->
	<!-- 	</button> -->
	<!-- </div> -->
</div>
<!-- <div -->
<!-- 	class="absolute right-8 z-10 flex w-56 flex-col justify-center rounded-2xl bg-black xl:hidden" -->
<!-- 	style="display: {isOpen ? 'block' : 'none'};" -->
<!-- > -->
<!-- 	<div class="space-y-4 px-8 py-8 xl:hidden"> -->
<!-- 		<a href="{base}/" class="block">Leaderboard</a> -->
<!-- 		<a href="{base}/" class="block">Projects</a> -->
<!-- 		<a href="{base}/" class="block">Dashboard</a> -->
<!-- 		<div class="flex flex-col space-y-4 xl:hidden"> -->
<!-- 			{#if $user.id} -->
<!-- 				<a href="{base}/">Logout</a> -->
<!-- 				<a href="{base}/" class="... truncate">{$user.name}</a> -->
<!-- 			{:else} -->
<!-- 				<a href="{base}/">Login</a> -->
<!-- 				<a href="{base}/">Signup</a> -->
<!-- 			{/if} -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->
