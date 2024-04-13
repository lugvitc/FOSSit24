<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import Glass from '$lib/components/Glass.svelte';
	import { slide } from 'svelte/transition';

	let showError: boolean = false;
	let errorMessage: string;

	async function handleError(event: ErrorEvent) {
		const error = event.error;
		errorMessage = error ? error.message : 'Unknown Error: Find it and Fix it!';
		showError = true;
		console.log('Error detected');
	}

	onMount(() => {
		console.log = (e) => {
			errorMessage = e;
			showError = true;
			setTimeout(() => {
				showError = false;
			}, 2000);
		};
		console.error = (e) => {
			errorMessage = e;
			showError = true;
			setTimeout(() => {
				showError = false;
			}, 2000);
		};
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/assets/robit/font.css" />
</svelte:head>
<svelte:window
	on:error={() => {
		handleError;
	}}
/>

<Navbar></Navbar>
<slot />

{#if showError}
	<div
		class="fixed right-5 top-5 z-[1000] mx-5 w-fit rounded-3xl bg-negative p-4 text-background md:w-72"
		transition:slide
	>
		<p class="text-sm text-background">{errorMessage}</p>
	</div>
{/if}
