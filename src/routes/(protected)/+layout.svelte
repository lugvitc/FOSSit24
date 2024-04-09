<script lang="ts">
	import { auth_user, user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';
	import Loading from '$lib/components/Loading.svelte';
	import Onboard from '$lib/components/Onboard.svelte';

	let loading = true;

	onMount(async () => {
		// loggedout is to check whether the navbar has done checking up usertable
		if ($user.needsonboarding || $user.id) {
			loading = false;
		} else {
			let i = 1;
			user.subscribe(() => {
				if (i) return i--; // prevent initial store set
				loading = false;
			});
		}
	});

	async function login() {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: location.protocol + '//' + location.host + location.pathname
			}
		});
	}
</script>

<Loading {loading}>
	<div class="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
		<img
			src="assets/Asset 1.png"
			class="gradient absolute top-52 -z-10 h-[1024px] w-[1024px] rotate-[128deg] overflow-hidden"
			alt="Gradient"
		/>
	</div>
	{#if !$auth_user.id}
		<div
			class="absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-center space-y-12"
		>
			<h4>Login to continue</h4>
			<button on:click={login} class="bg-foreground text-background">Login</button>
		</div>
	{:else if $user.id}
		<slot />
	{:else}
		<Onboard />
	{/if}
</Loading>
