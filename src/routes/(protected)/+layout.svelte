<script lang="ts">
	import { auth_user, user } from '$lib/stores';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import supabase from '$lib/supabase';
	import Loading from '$lib/components/Loading.svelte';
	import Onboard from '$lib/components/Onboard.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';

	let loading = true;

	onMount(async () => {
		// loggedout is to check whether the navbar has done checking up usertable
		if ($user.needsonboarding || $user.id) {
			loading = false;
		} else {
			let i = 1;
			user.subscribe(() => {
				if (i) return i--; // prevent initial store set
				// Very very bad practice:
				if ($user.needsjointeam && location.pathname != '/dashboard')
					location.replace(`${base}/dashboard`);
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
			src="{base}/assets/Asset 1.png"
			class="gradient absolute left-[calc(50%-550px)] top-52 -z-10 m-auto h-[1024px] w-[1024px] rotate-[128deg] overflow-hidden"
			alt="Gradient"
		/>
	</div>
	{#if !$auth_user.id}
		<Section>
			<div class="m-auto max-w-xl space-y-8">
				<Glass class="mt-[calc(50vh-256px)] flex flex-col justify-center space-y-4 text-center">
					<h4 class="text-white">Login to continue</h4>
					<button on:click={login} class="bg-foreground text-background">Login</button>
				</Glass>
			</div>
		</Section>
	{:else if $user.id}
		<slot />
	{:else}
		<Onboard />
	{/if}
</Loading>
