<script lang="ts">
	import { auth_user, user } from '$lib/stores';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	let isOpen = false;

	async function logout() {
		const { error } = await supabase.auth.signOut();
		location.reload();
	}

	async function login() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: location.protocol + '//' + location.host + location.pathname
			}
		});
	}

	onMount(async () => {
		if (!$auth_user.id) {
			const { data: auth_data } = await supabase.auth.getUser();

			if (auth_data.user) {
				$auth_user = auth_data.user;
			}

			let { data } = await supabase.from('users').select('*').eq('id', $auth_user.id).single();

			$user = data || { needsonboarding: true };
		}
		if (!$user.team) {
			$user.needsjointeam = true;
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
		<div class="flex items-center space-x-6 xl:space-x-12">
			<a href="{base}/">
				<img src="{base}/lug_logo.png" class="h-12" alt="Logo" />
			</a>
			<a href="https://lugvitc.net">LUGVITC</a>
		</div>
		<!-- <div class="hidden items-center space-x-12 xl:flex"> -->
		<!-- 	<a href="{base}/leaderboard">Leaderboard</a> -->
		<!-- 	<a href="{base}/projects">Projects</a> -->
		<!-- 	<a href="{base}/ideas">Ideas</a> -->
		<!-- </div> -->
	</div>
	<!-- <div class="hidden items-center space-x-4 xl:flex"> -->
	<!-- 	{#if $auth_user.id} -->
	<!-- 		<button on:click={logout}>Logout</button> -->
	<!-- 		<a href="{base}/dashboard" class="... max-w-72 truncate" data-primary -->
	<!-- 			>@{$auth_user.user_metadata.user_name}</a -->
	<!-- 		> -->
	<!-- 	{:else} -->
	<!-- 		<button data-primary on:click={login}>Login</button> -->
	<!-- 	{/if} -->
	<!-- </div> -->
	<!-- <div class="relative flex items-center justify-center xl:hidden"> -->
	<!-- 	<button class="block h-fit border-0 !p-0" on:click={toggleMenu}> -->
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
<!-- 		<a href="{base}/leaderboard" class="block">Leaderboard</a> -->
<!-- 		<a href="{base}/projects" class="block">Projects</a> -->
<!-- 		<a href="{base}/ideas" class="block">Ideas</a> -->
<!-- 		<div class="flex flex-col space-y-4 xl:hidden"> -->
<!-- 			{#if $auth_user.id} -->
<!-- 				<a on:click={logout} class="cursor-pointer">Logout</a> -->
<!-- 				<a href="{base}/dashboard" class="... truncate">@{$auth_user.user_metadata.user_name}</a> -->
<!-- 			{:else} -->
<!-- 				<a on:click={login} class="cursor-pointer">Login</a> -->
<!-- 			{/if} -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->
