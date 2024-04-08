<script lang="ts">
	import { auth_user, user } from '$lib/stores';
	import { onMount } from 'svelte';
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
</script>

<Loading {loading}>
	{#if !$auth_user.id}
		<p>Not logged in</p>
	{:else if $user.id}
		<slot />
	{:else}
		<Onboard />
	{/if}
</Loading>
